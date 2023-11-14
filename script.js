document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".carrossel-slide");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Show the first slide initially
    showSlide(currentSlide);

    // Event listeners for next and previous buttons (assuming you have these buttons)
    document.getElementById("nextBtn").addEventListener("click", nextSlide);
    document.getElementById("prevBtn").addEventListener("click", prevSlide);

    // Optional: Automatic slide change every 3 seconds
    setInterval(nextSlide, 3000);
});