const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
});
