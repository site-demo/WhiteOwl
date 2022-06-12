const img = document.querySelector('.slider__image');
const dots = document.querySelectorAll('.slider__dot');

const imgArr = ['img/slider/1.jpg', 'img/slider/2.jpg', 'img/slider/3.jpg', 'img/slider/4.jpg', 'img/slider/5.jpg', 'img/slider/6.jpg'];

let currentIndex = 0;

function changeIndex(ind) {
    currentIndex = ind;
    slide(currentIndex);
}

function nextIndex(direction) {
    currentIndex += direction;
    if (currentIndex >= imgArr.length) {
        currentIndex = 0;
    }   else if (currentIndex < 0 ) {
        currentIndex = imgArr.length - 1;
    }

    slide(currentIndex);
}

function slide(index) {
    img.src = imgArr[index];

    updateDots(index);
}

function updateDots(index) {
    for (let dot of dots) {
        dot.classList.remove('active');
    }

    dots[index].classList.add('active');
}
