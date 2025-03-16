document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("welcome").style.opacity = "0";
        setTimeout(function() {
            document.getElementById("welcome").style.display = "none";
            document.getElementById("main-content").classList.remove("hidden");
        }, 1000);
    }, 3000);
});

// Slideshow Script
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

// Next/Previous Controls
function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}