
let index = 0;

const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => { // Remove active class from all slides
        slide.classList.remove("active"); // Add active class to the current slide
        if (i === index) { 
            slide.classList.add("active"); // Show the current slide
        }
    }); 
}

function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
}

showSlide(index);
setInterval(nextSlide, 10000);