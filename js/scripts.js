// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMenuButton = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = mobileMenu.querySelectorAll('a');

if (mobileMenuButton && closeMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('open');
    });

    closeMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
    });

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Animate skill bars on scroll or load
const progressBars = document.querySelectorAll('.progress-fill');

function animateProgressBars() {
    progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        if (width) {
            bar.style.width = width + '%';
        }
    });
}

// Contact form submission
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Simulated message success (replace with backend logic)
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Run when the page loads
window.addEventListener('load', function() {
    animateProgressBars();
});
