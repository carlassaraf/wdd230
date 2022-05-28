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
});

function setDate() {

    let date = new Date();
    document.getElementById("date").innerText = `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
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
    //document.getElementById("join-banner");

    if(date.getDay() == 6 || date.getDay() == 2) {

        let header = document.querySelector("header");
        let banner = document.createElement("h3");
        banner.innerText = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m";
        banner.setAttribute("id", "join-banner");
        header.prepend(banner);
        // <h3 id="join-banner"></h3>
        //banner.style.display = "block";
    }
}

function toggleMenu() {

    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("primaryNav").classList.toggle("open");

}