// Hamburger Menu

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");


menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});


// Close menu after clicking any link

const menuLinks = document.querySelectorAll(".menu li a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});
