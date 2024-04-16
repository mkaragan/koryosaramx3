
document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.kuksi-photo img, .hero-img a');
    const maxDistance = 15; // Maximum distance elements can move from the cursor

    document.addEventListener('mousemove', function(event) {
        elements.forEach(function(element) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            const elementX = element.getBoundingClientRect().left + (element.offsetWidth / 2);
            const elementY = element.getBoundingClientRect().top + (element.offsetHeight / 2);

            const deltaX = mouseX - elementX;
            const deltaY = mouseY - elementY;

            const angle = Math.atan2(deltaY, deltaX);
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const maxTranslation = Math.min(distance, maxDistance);

            const translateX = Math.cos(angle) * maxTranslation;
            const translateY = Math.sin(angle) * maxTranslation;

            element.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
    });
});

// code from Chatgpt