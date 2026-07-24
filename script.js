// ==========================
// MOBILE MENU
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ==========================
// CLOSE MENU ON LINK CLICK
// ==========================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ==========================
// STICKY HEADER
// ==========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

// ==========================
// AOS ANIMATION
// ==========================

AOS.init({

    duration: 1000,
    once: true

});

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==========================
// ACTIVE MENU LINK
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==========================
// SCROLL TO TOP
// ==========================

const scrollTopBtn = document.createElement("button");

scrollTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

scrollTopBtn.className = "scroll-top";

document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopBtn.classList.add("show");

    } else {

        scrollTopBtn.classList.remove("show");

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================
// PRELOADER (Future Ready)
// ==========================

window.addEventListener("load", () => {

    const loader = document.querySelector(".preloader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

// ==========================
// HEADER SHADOW
// ==========================

window.addEventListener("scroll", () => {

    if (window.scrollY > 10) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ==========================
// CURRENT YEAR
// ==========================

const year = document.querySelector("#year");

if (year) {

    year.textContent = new Date().getFullYear();

}

// ==========================
// CONSOLE MESSAGE
// ==========================

console.log("Piyush BuildCare Solutions Website Loaded Successfully 🚀");
// ==========================
// Scroll To Top Button
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

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
// PRELOADER
// ==========================

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";

    setTimeout(() => {

        preloader.style.display = "none";

    }, 500);

});