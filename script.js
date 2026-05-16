/* ========================================
   FOCUS REBOOT - Interactive Scripts
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initNavigation();
    initScrollAnimations();
    initFAQ();
    initMobileMenu();
});

/* ========================================
   STICKY NAVIGATION
   ======================================== */
function initNavigation() {
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Add/remove scrolled class
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

/* ========================================
   SCROLL ANIMATIONS
   ======================================== */
function initScrollAnimations() {
    // Create observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with scroll-animate class
    document.querySelectorAll('.scroll-animate').forEach(function(el) {
        observer.observe(el);
    });

    // Also trigger fade-in-up elements on scroll
    const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in');

    const fadeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(function(el) {
        // Set initial state
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(el);
    });
}

/* ========================================
   FAQ ACCORDION
   ======================================== */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function(item) {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function() {
            // Close other open items
            faqItems.forEach(function(otherItem) {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

/* ========================================
   MOBILE MENU
   ======================================== */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function() {
            // Toggle mobile menu
            navLinks.classList.toggle('active');

            // Animate hamburger
            const spans = menuBtn.querySelectorAll('span');
            menuBtn.classList.toggle('menu-open');
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuBtn.classList.remove('menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                menuBtn.classList.remove('menu-open');
            }
        });
    }
}

/* ========================================
   ADDITIONAL ENHANCEMENTS
   ======================================== */

// Parallax effect for hero elements
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');

    if (heroVisual) {
        const rate = scrolled * 0.1;
        heroVisual.style.transform = `translateY(${rate}px)`;
    }
});

// Add subtle float animation to cards on hover
document.querySelectorAll('.pain-card, .review-card, .science-card, .bonus-card').forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// CTA button ripple effect
document.querySelectorAll('.btn-primary, .btn-cta').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            width: 100px;
            height: 100px;
            left: ${x - 50}px;
            top: ${y - 50}px;
            transform: scale(0);
            animation: rippleEffect 0.6s linear;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(function() {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Preload hover states for smoother interaction
document.querySelectorAll('a, button').forEach(function(el) {
    el.addEventListener('mouseenter', function() {
        this.style.willChange = 'transform, box-shadow';
    });

    el.addEventListener('mouseleave', function() {
        this.style.willChange = 'auto';
    });
});

// Lazy loading for images (if any added later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(function(img) {
        imageObserver.observe(img);
    });
}

// Console message for branding
console.log('%c FOCUS REBOOT ', 'background: #1A1A1A; color: #9CAF88; font-size: 20px; padding: 10px; border-radius: 4px;');
console.log('%c Reset Your Brain. Reclaim Your Focus. ', 'color: #6B6B6B; font-size: 14px;');