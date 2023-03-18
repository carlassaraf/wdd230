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

/**
 * Returns the same capitalized string
 * @returns Capitalized String
 */
String.prototype.capitalize = function() {
    // split the string by spaces
    let arr = this.split(" ");
    // capitalized array
    let capArr = [];
    // loop through every word
    arr.forEach(word => {
        // capitalize word
        capArr.push(`${word.slice(0, 1).toUpperCase()}${word.slice(1)}`);
    });
    // join array and return
    return capArr.join(" ");
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
    const lastModified = document.querySelector("#lastModified");
    // Full year paragraph
    const fullYear = document.querySelector("#footer-bottom-content p:first-child");

    // Add event for menu click
    menu.addEventListener("click", () => navLinks.classList.toggle("responsive-menu"));

    // Add current date
    date.innerText = `${dateObj.getDayString()}, ${dateObj.getDate()} ${dateObj.getMonthString()} ${dateObj.getFullYear()}`;

    // Add last modified
    lastModified.innerText = `Last modified: ${document.lastModified}`;

    // Add full year after © symbol
    const index = fullYear.innerText.indexOf("©");
    const str = fullYear.innerText.slice(0, index + 1).concat(dateObj.getFullYear());
    fullYear.innerText = str.concat(fullYear.innerText.slice(index + 1));

    // Check whether it's Monday or Tuesday to show banner
    const day = dateObj.getDay();
    if(day > 0 && day < 3) { 
        // Create container for banner
        let banner = document.createElement("section");
        banner.classList.add("banner");
        // Create h4 for the content
        let bannerContent = document.createElement("h4");
        bannerContent.innerText = "🤝 Come join us for the chamber meet and greet Wednesday at 7:00 pm 🤝";
        // Append elements
        banner.append(bannerContent);
        document.querySelector("header").prepend(banner);
    }

    spotlight_json().then(business => {
        // Display the spotlight business
        spotlight_show(business);
    });
});


async function spotlight_json() {
    // Spotlight business array
    let business = [];
    // Fetch json data
    const response = await fetch("json/directory.json");
    // Verify response
    if(response.ok) {
        // Wait for data
        const data = await response.json();
        // Filter all gold and silver members
        const filter = data.directory.filter(business => {
            // Return when membership is silver or gold
            if(business.membership === "silver" || business.membership === "gold") {
                return true;
            }
        });
        // Randomly choose three business
        for(let i = 0; i < 3; i++) {
            // Get random index
            const index = random_index(filter);
            // Add business data
            business.push(filter[index]);
            // Remove selected business
            filter.splice(index, 1);
        }
    }
    // Return array
    return business;
}

function random_index(arr) {
    // Random number up to arr.length
    return Math.floor(Math.random() * arr.length);
}

function spotlight_show(business) {
    // Get spotlights
    const spotlights = document.querySelectorAll(".spotlight");
    // Create elements for every spotlight
    business.forEach((json, index) => {
        // Create elements
        let businessName = document.createElement("h2");
        let businessLogo = document.createElement("img");
        let hr = document.createElement("hr");
        let businessContact = document.createElement("p");
        let businessAddress = document.createElement("p");
        // Fill h2 with data
        businessName.innerText = json.business;
        // Fill img with data
        businessLogo.setAttribute("src", json.logo);
        businessLogo.setAttribute("alt", json.business);
        // Fill contact
        businessContact.innerHTML = `<em>${json.phone} | ${json.email}</em>`;
        // Fill address
        businessAddress.innerHTML = `<em>${json.address}</em>`;
        // Append elements
        spotlights[index].append(businessName);
        spotlights[index].append(businessLogo);
        spotlights[index].append(hr);
        spotlights[index].append(businessAddress);
        spotlights[index].append(businessContact);
    });
    /**
     *                     <h2>Quilmes Athletic Club</h2>
                    <img src="images/club.png" alt="placeholder">
                    <p><em>Come spend your summer break with us!</em></p>
                    <hr>
                    <p><em>qac@gmail.com</em></p>
                    <p><em>+54 4224 4120 | quilmesclub.com.ar</em></p>
     */
}