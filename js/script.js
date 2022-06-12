$(document).ready(function(){
  
    // Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");	// Маска ввода номера телефона

    	// Отправка писем с сайта на почту
    $('form').submit(function(e) {	// Здесь отправка писем со всех форм, если с какой то конкретной формы то указать имя класса или id: .form_class или #id_form
        e.preventDefault();		// Отмена стандартного поведения браузера (не будет перезагрузки страницы)
        $.ajax({			// обмен данными с сервером
            type: "POST",		// Отпрака данных
            url: "mailer/smart.php",		// Откуда отправляем запрос
            data: $(this).serialize()		// Отправка данных с конкретной формы
        }).done(function() {		// Если отправка завершена, то выполняем функцию
            $(this).find("input").val("");	// Очистка всех input текущей формы
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');	// Очистка всех форм
        });
        return false;			// Вернуть (возврат, возвращение)
    });

    // Smooth scroll and pageup	Скрол вверх при нажатии кнопки вверх (иконка)

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    new WOW().init();
});

