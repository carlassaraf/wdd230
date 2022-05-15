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

function toggleMenu() {

    document.getElementById("hamburgerBtn").classList.toggle("open");
    document.getElementById("primaryNav").classList.toggle("open");

}