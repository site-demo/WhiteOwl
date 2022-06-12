// 'use strict';
	var liItem = document.getElementsByClassName('li-item');
	let modalContent = document.querySelectorAll('.modal__content');
	let modal = document.getElementById('modal');
	const modalClose = document.querySelectorAll('.modal__close');
	// let ii;

	for (let i = 0; i < liItem.length; i++) {
		liItem[i].addEventListener('click', function() {
			modal.classList.toggle('modal_active');
	        modalContent[i].classList.toggle('modal_active');
	    });
	}

	for (let i = 0; i < modalClose.length; i++) {
		modalClose[i].addEventListener('click', function() {
			modal.classList.toggle('modal_active');
			modalContent[i].classList.toggle('modal_active');
		});
	}



// Это же самое можно записать с использованием функции стрелочка,
// но при этом использовать this нельзя. Будет выглядеть так:
	/* var $li = document.getElementsByTagName('li');
	for (let i = 0; i < $li.length; i++) {
	    $li[i].addEventListener('click', e => {
	       e.currentTarget.classList.toggle('done');
	    });
	} */

// Есть второй способ выполнения этих же действий (более читабельный и изящный)
// Это навешивание обработчика события на родительский элемент.
// В нашем случае на    ul.   И затем определяем на какой элемент кликнули.:
	/* var $ul = document.querySelector('ul');
	    $ul.addEventListener('click', function(e) {
	    if (e.target.tagName === 'LI') {
	        e.target.classList.toggle('done')
        }
	}); */