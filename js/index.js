document.addEventListener('DOMContentLoaded', () => {

    /* Add current year */
    updateFooter();
});

function updateFooter() {

    let owner = document.getElementById("owner");
    let lastModified = document.getElementById("last-modified");
    /* Update HTML */
    owner.innerText = addCurrentYearAt(owner.innerText, "©");
    lastModified.innerText = `Last modified: ${document.lastModified}`;
}

function addCurrentYearAt(txt, char) {

    let date = new Date();
    /* Split the text into an array */
    txt = txt.split("");
    /* Find the © index */
    let index = txt.indexOf(char);
    /* Insert the current year into the array and join */
    txt.splice(index + 1, 0, date.getFullYear());
    return txt.join("");
}