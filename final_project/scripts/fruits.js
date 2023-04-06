document.addEventListener("DOMContentLoaded", () => {
    // Fetch select
    let selects = document.querySelectorAll("select");
    // Fetch json data
    fetch("./json/fruits.json").then(data => data.json().then(data => {
        // Create options for every select
        selects.forEach(select => {
            // Iterate every fruit
            data.forEach(fruit => {
                // Create option
                let option = document.createElement("option");
                option.value = fruit.name;
                option.innerText = fruit.name;
                // Append to every select
                select.appendChild(option);
            });
        });
    }));

});