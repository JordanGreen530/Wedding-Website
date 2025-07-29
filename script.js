document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.parallax');
    const speed = 0.5;
    let ticking = false;

    const updateParallax = () => {
        const scrollPos = window.pageYOffset;
        sections.forEach(section => {
            section.style.backgroundPositionY = -(scrollPos * speed) + 'px';
        });
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
});

