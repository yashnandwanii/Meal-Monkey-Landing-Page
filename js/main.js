// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Screenshots slider
let currentSlide = 0;
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.screenshot-item');

function moveSlider(direction) {
    if (!sliderContainer || slides.length === 0) return;
    
    const slideWidth = slides[0].offsetWidth + 30; // 30px gap
    const maxScroll = sliderContainer.scrollWidth - sliderContainer.clientWidth;
    
    currentSlide += direction;
    
    // Reset if at boundaries
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    
    const scrollPosition = currentSlide * slideWidth;
    sliderContainer.scrollTo({
        left: Math.min(scrollPosition, maxScroll),
        behavior: 'smooth'
    });
}

// Auto-advance slider (optional)
let sliderInterval;

function startSlider() {
    sliderInterval = setInterval(() => {
        moveSlider(1);
    }, 5000); // Change slide every 5 seconds
}

function stopSlider() {
    clearInterval(sliderInterval);
}

// Start auto-advance
if (sliderContainer) {
    startSlider();
    
    // Pause on hover
    sliderContainer.addEventListener('mouseenter', stopSlider);
    sliderContainer.addEventListener('mouseleave', startSlider);
}

// Smooth scroll for anchor links
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

// Add active state to nav links based on scroll position
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60 FPS
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Animate counters if present
            const counters = entry.target.querySelectorAll('[data-count]');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-count'));
                animateCounter(counter, target);
            });
        }
    });
}, observerOptions);

// Observe all feature cards
document.querySelectorAll('.feature-card, .app-card, .tech-category').forEach(card => {
    observer.observe(card);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Image lazy loading fallback (for older browsers)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Keyboard navigation for slider
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        moveSlider(-1);
    } else if (e.key === 'ArrowRight') {
        moveSlider(1);
    }
});

// Mobile menu styles
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 968px) {
        .nav-links {
            position: fixed;
            top: 70px;
            left: -100%;
            width: 100%;
            background: white;
            flex-direction: column;
            padding: 20px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            transition: left 0.3s ease;
            z-index: 999;
        }
        
        .nav-links.active {
            left: 0;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        .btn-github {
            display: none;
        }
    }
`;
document.head.appendChild(style);

// Console message
console.log('%c🍕 Meal Monkey - Food Delivery Ecosystem', 'color: #FF6B35; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with Flutter & Node.js', 'color: #667eea; font-size: 14px;');
console.log('%cGitHub: https://github.com/yashnandwanii/Delivery-Partner-App', 'color: #1a1a2e; font-size: 12px;');
