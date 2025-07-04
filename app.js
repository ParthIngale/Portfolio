// JavaScript for Interactions
window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const loadingScreen = document.getElementById('loading-screen');
    const navToggle = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const skillProgress = document.querySelectorAll('.skill-progress .progress-bar');

    // Show loading screen
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = document.querySelector(link.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            navMenu.classList.remove('active');
        });
    });

    // Toggle navigation menu
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Show skill progress
    skillProgress.forEach(bar => {
        const width = bar.dataset.width;
        bar.style.width = width;
    });

    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Back to top button
    const backToTopButton = document.createElement('div');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '&#8679;';
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.style.opacity = 1;
        } else {
            backToTopButton.style.opacity = 0;
        }
    });

    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.backgroundColor = 'var(--primary-color)';
    backToTopButton.style.color = 'white';
    backToTopButton.style.borderRadius = '50%';
    backToTopButton.style.padding = '10px';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.transition = 'opacity 0.3s ease';
    backToTopButton.style.opacity = 0;
    backToTopButton.style.boxShadow = 'var(--shadow)';
});
