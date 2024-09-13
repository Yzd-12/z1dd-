document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const gallery = document.querySelector('.gallery');
    let index = 0;

    function showSlide(newIndex) {
        const totalSlides = document.querySelectorAll('.gallery-item').length;
        index = (newIndex + totalSlides) % totalSlides;
        gallery.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        showSlide(index - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(index + 1);
    });

    // Optional: Auto-slide every 5 seconds
    setInterval(() => {
        showSlide(index + 1);
    }, 2000);
});
