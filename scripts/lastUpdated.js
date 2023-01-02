document.addEventListener("DOMContentLoaded", () => {
    // Get the last modified date
    let date = document.lastModified;

    // Get the h4 to set the string
    let h4 = document.querySelector("footer h4");

    // Set h4 inner text with date
    h4.innerText = `Last modified: ${date}`;
});