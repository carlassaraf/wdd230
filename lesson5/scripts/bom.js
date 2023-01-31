/**
 * Capitalizes String
 * @returns String
 */
String.prototype.capitalize = function() {
    return this.slice(0, 1).toUpperCase() + this.slice(1);
}

document.addEventListener("DOMContentLoaded", () => {
    // Find the input
    const input = document.querySelector("input");
    // Find button
    const button = document.querySelector("button");
    // Find the main div element
    const container = document.querySelector("#chapters-container");
    // Add click event
    button.addEventListener("click", () => {
        // Validate input content
        if(input.value.trim() === "") { return; }
        // Create a div with the class chapter-container class
        let div = document.createElement("div");
        div.classList.add("chapter-container");
        // Create the h4 with the content
        let h4 = document.createElement("h4");
        h4.innerText = input.value.capitalize();
        // Create and add button with delete class
        let btn = document.createElement("button");
        btn.classList.add("delete");
        btn.innerText = "X";
        // Add delete event for button
        btn.addEventListener("click", (e) => {
            // Go from target to parent and delete
            e.target.parentElement.remove();
        });
        // Append elements into div
        div.append(...[h4, btn]);
        // Append div
        container.append(div);
        // Clear input
        input.value = "";
    });
});