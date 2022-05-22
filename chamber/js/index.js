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
    let banner = document.getElementById("join-banner");

    if(date.getDay() == 1 || date.getDay() == 2) {
        banner.style.display = "block";
    }
}

function toggleMenu() {

    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("primaryNav").classList.toggle("open");

}