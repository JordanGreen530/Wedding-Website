document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.parallax');

    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const scrollPos = window.pageYOffset;
            const speed = 0.5; // Adjust for desired parallax intensity
            const yPos = -(scrollPos * speed) + 'px';
            section.style.backgroundPositionY = yPos;
        });
    });
});
