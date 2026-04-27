// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Run on load

// Skills toggle functionality
function toggleSkills(element) {
    const skillCategory = element.closest('.skill-category');
    if (!skillCategory) {
        return;
    }

    const skillList = skillCategory.querySelector('.skill-list');
    const isOpen = skillList && skillList.classList.toggle('show');

    if (isOpen !== undefined) {
        element.setAttribute('aria-expanded', String(isOpen));
    }
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(26, 26, 46, 0.9)';
        nav.style.backdropFilter = 'blur(20px)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.1)';
        nav.style.backdropFilter = 'blur(15px)';
    }
});

// Initialize first animation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-toggle').forEach(toggle => {
        const category = toggle.closest('.skill-category');
        const skillList = category.querySelector('.skill-list');
        const isOpen = skillList ? skillList.classList.contains('show') : false;
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    setTimeout(() => {
        animateOnScroll();
    }, 100);
});