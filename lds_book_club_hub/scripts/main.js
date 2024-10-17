document.addEventListener('DOMContentLoaded', function() {

    // Video play button functionality
    document.querySelector('.video-play-button').addEventListener('click', function() {
        var overlay = this.closest('.video-overlay');
        var iframe = overlay.previousElementSibling;
        iframe.src += "&autoplay=1";
        overlay.style.display = 'none';
    });

    // Mobile menu toggle
    document.querySelector('.rev-burger').addEventListener('click', function() {
        this.classList.toggle('open');
        document.querySelector('nav ul').classList.toggle('show');
    });

    // Smooth scroll functionality
    document.querySelector('.rev-scroll-btn').addEventListener('click', function() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });

    // Video control button functionality
    document.querySelector('.rev-control-btn').addEventListener('click', function() {
        var iframe = document.querySelector('.video-container iframe');
        iframe.src += "&autoplay=1";
        this.style.display = 'none';
    });

    // Review form submission
    document.getElementById('review-form').addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('review-loader').style.display = 'block';
        // Simulate form submission
        setTimeout(function() {
            document.getElementById('review-loader').style.display = 'none';
            alert('Thank you for your review!');
        }, 2000);
    });

    // Book slider functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.book-slide');
    const bullets = document.querySelectorAll('.nav-bullet');

    function showSlide(n) {
        slides[currentSlide].style.display = 'none';
        bullets[currentSlide].classList.remove('selected');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].style.display = 'block';
        bullets[currentSlide].classList.add('selected');
    }

    document.querySelector('.left-arrow').addEventListener('click', () => showSlide(currentSlide - 1));
    document.querySelector('.right-arrow').addEventListener('click', () => showSlide(currentSlide + 1));
    bullets.forEach((bullet, index) => {
        bullet.addEventListener('click', () => showSlide(index));
    });

    // Tab functionality
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('selected'));
            this.classList.add('selected');
            // Here you would typically update the content based on the selected tab
        });
    });

    // Initialize the slider
    showSlide(0);

    
});