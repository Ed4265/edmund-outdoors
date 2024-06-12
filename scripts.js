function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
        navLinks.classList.remove('show');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
