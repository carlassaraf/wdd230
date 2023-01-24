document.addEventListener("DOMContentLoaded", () => {

    // Hamburger menu
    let navLinks = document.querySelector(".nav-links");
    let menu = document.querySelector("#menu");

    // Add event for menu click
    menu.addEventListener("click", () => navLinks.classList.toggle("responsive-menu"));

});