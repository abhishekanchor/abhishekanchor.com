const slider = document.querySelector('.slider5');
const slides = document.querySelectorAll('.slide8');
const totalSlides = slides.length;
const slidesToShow = 4;
let currentIndex = 0;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    const offset = -(currentIndex * 100 / slidesToShow);
    slider.style.transform = `translateX(${offset}%)`;
}

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);

// Ensure the slider starts correctly
slider.style.transform = `translateX(0%)`;
