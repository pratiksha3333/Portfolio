document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Toggle Logic
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        // Toggle the 'active' class on the nav links when the button is clicked
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close the menu when a link is clicked (for single-page navigation)
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }


    // 2. Smooth Scrolling for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll smoothly to the element
                window.scroll({
                    top: targetElement.offsetTop - 70, // Adjust for fixed header height (approx 70px)
                    behavior: 'smooth'
                });
            }
        });
    });


    // 3. Simple Scroll Animation (Fade-in effect using Intersection Observer)
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of element is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once it's shown
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        // The 'fading-element' class is already in the HTML/CSS
        sectionObserver.observe(section);
    });
});