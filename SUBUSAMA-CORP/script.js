// Navbar Shadow on Scroll

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    } else {
        nav.style.boxShadow = "none";
    }

});

// ================= Mobile Menu =================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }

    });
    // Close menu after clicking a link
        navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            const icon = menuToggle.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        });
    });

}
// Reveal Animation

const cards = document.querySelectorAll(".service-card, .partner-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.8s";

    observer.observe(card);

});

// Toggle Products

function toggleProducts(id){

    let list = document.getElementById(id);

    if(list.style.display === "block"){
        list.style.display = "none";
    }else{
        list.style.display = "block";
    }

}
const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }

    });

    scrollBtn.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
