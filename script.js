document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".parallax");

    window.addEventListener("scroll", function() {
        let scrollTop = window.scrollY;
        
        sections.forEach(section => {
            let speed = section.getAttribute("data-speed") || 0.5;
            section.style.backgroundPositionY = -(scrollTop * speed) + "px";
        });
    });
});
