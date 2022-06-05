let months = [
    "January", "February", "March", 
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];

let days = [
    "Sunday", "Monday", "Tuesday", 
    "Wednesday", "Thursday", "Friday", "Saturday"
];

document.addEventListener("DOMContentLoaded", () => {

    setDate();
    setLastModified();
    setYear();
    checkJoinBanner();
    if(document.title == "Chamber") { getWeatherData(); }
});

function setDate() {

    let date = new Date();
    let h4 = document.createElement("h4");
    h4.innerText = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    h4.setAttribute("id", "date");

    document.querySelector(".header-container").append(h4);
}

function setLastModified() {
    
    let date = new Date();
    let lastModified = document.getElementById("lastModified");
    lastModified.innerText += ` ${date.getMonth()}/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function setYear() {

    let date = new Date();
    let p = document.querySelector("#footer-bottom p");
    let txt = p.innerText.split("");
    let index = txt.indexOf("©");
    txt.splice(index + 1, 0, date.getFullYear());
    p.innerText = txt.join("");
}

function checkJoinBanner() {

    let date = new Date();

    if(date.getDay() == 1 || date.getDay() == 2) {

        let header = document.querySelector("header");
        let banner = document.createElement("h3");
        banner.innerText = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m";
        banner.setAttribute("id", "join-banner");
        header.prepend(banner);
    }
}

function toggleMenu() {

    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("primaryNav").classList.toggle("open");

}