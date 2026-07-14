// ==========================
// Mobile Menu
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// ==========================
// Typing Effect
// ==========================

const typing = document.querySelector(".typing");

const words = [
    
    "B.Tech IT Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typing) return;

    let currentWord = words[wordIndex];

    if (!deleting) {
        typing.textContent = currentWord.substring(0, charIndex++);
    } else {
        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 80 : 120;

    if (!deleting && charIndex > currentWord.length) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex < 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        charIndex = 0;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// ==========================
// Scroll To Top
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ==========================
// Sticky Header
// ==========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {
        header.style.background = "#0b1020";
    } else {
        header.style.background = "rgba(11,16,32,.85)";
    }

});

// ==========================
// Contact Form
// ==========================

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been sent.");

    form.reset();

});