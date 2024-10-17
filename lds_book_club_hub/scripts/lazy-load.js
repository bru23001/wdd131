// lazy-load.js
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img.lazy-load');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => img.classList.add('fade-in');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach((img) => observer.observe(img));
});