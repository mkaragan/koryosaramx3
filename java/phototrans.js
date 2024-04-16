document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".classchanger");
    const image = document.querySelector(".kuksi-photo img");

    links.forEach(function(link) {
        link.addEventListener("mouseover", function() {
            const newSrc = link.getAttribute("data-src");
            image.src = newSrc;
            image.classList.add("fade-in");
        });

        link.addEventListener("mouseout", function() {
            const originalSrc = "images/final.jpeg"; // Set the original image source here
            image.src = originalSrc;
            // image.classList.remove("fade-in");
        });
    });
});

// code from Chatgpt