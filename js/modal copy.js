const btn = document.getElementById('open-modal');
const modal = document.getElementById('modal');

const closeBtn = document.querySelector('.modal__close');

btn.onclick = () => {
    modal.classList.add('modal_active');    // Добавить класс активности- .modal_active
    // Закрытие модального окна по крестику. Слушатель прописываем внутри функции открытия
    // и он включится тогда после открытия модального окна.
    closeBtn.addEventListener('click', closeModal); // Добавили слушатель нажатия на крестик

    modal.addEventListener('click', hideModal); // Добавили слушатель нажатия на область вне модального окна

    // Функция закрытия при клике на крестик
    function closeModal() {
        modal.classList.remove('modal_active');
        closeBtn.removeEventListener('click', closeModal); // Удаление слушателя
        modal.removeEventListener('click', hideModal); // Удаление слушателя
    }

    // Функция закрытия при нажатии в области вне модального окна
    function hideModal(event) {
        if (event.target === modal) {
            closeModal();   // Вызываем функцию закрытия при клике на крестик
        }
    }
};
