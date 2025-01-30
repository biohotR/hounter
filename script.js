document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".testimonials__slide");
    const dots = document.querySelectorAll(".dot");
    const slider = document.querySelector(".testimonials__slides");
    let currentSlide = 0;

    function moveSlide(index) {
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        slider.style.transform = `translateX(-${currentSlide * 100}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentSlide);
        });
    }

    // Add event listeners to dots for manual navigation
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => moveSlide(index));
    });

    // Auto-slide every 5 seconds
    setInterval(() => {
        moveSlide(currentSlide + 1);
    }, 5000);
});

const messageInput = document.getElementById("message");
const charCount = document.querySelector(".char-count");

messageInput.addEventListener("input", () => {
    charCount.textContent = `${messageInput.value.length}/500`;
});
