// JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS with custom settings
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Add active state to navigation items
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-yellow-300');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('text-yellow-300');
            }
        });
    });

    // Typing animation for hero section
    const text = "Turning ideas into reality through code";
    let index = 0;
    const typeWriter = () => {
        if (index < text.length) {
            document.querySelector('.hero-text').textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    };

    // Add animation class when elements come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('section');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate-fadeIn');
            }
        });
    };

    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
});

// You can add more interactive features here as needed