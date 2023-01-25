/**
 * Date prototype to get the day as String
 * @returns String
 */
Date.prototype.getDayString = function() {

    // Array with every day of the week as a string
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // Return the proper day as string with today's index (0-6)
    return days[this.getDay()];
}

/**
 * Date prototype to get the month as String
 * @returns String
 */
Date.prototype.getMonthString = function() {

    // Array with every month
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];
    // Return month as string
    return months[this.getMonth()];
}

document.addEventListener("DOMContentLoaded", () => {

    // Hamburger menu
    const navLinks = document.querySelector(".nav-links");
    const menu = document.querySelector("#menu");
    // Current date paragraph
    const date = document.querySelector("#date-section p");
    // Date object
    const dateObj = new Date();
    // Last modified paragraph
    const lastModified = document.querySelector("#footer-bottom-content p:nth-child(4)");

    // Add event for menu click
    menu.addEventListener("click", () => navLinks.classList.toggle("responsive-menu"));

    // Add current date
    date.innerText = `${dateObj.getDayString()}, ${dateObj.getDate()} ${dateObj.getMonthString()} ${dateObj.getFullYear()}`;

    // Add last modified
    lastModified.innerText = `Last modified: ${document.lastModified}`;
});