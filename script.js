document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelectorAll('nav a');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    logo.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var informationLink = document.querySelector('.nav-menu li a[href="Information"]');
    
    informationLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 700,
            behavior: 'smooth'
        });
    });
});