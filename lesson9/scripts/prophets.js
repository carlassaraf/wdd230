// JSON file url
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

/**
 * Gets the Prophets data from a JSON request
 */
async function getProphetData() {
    // Fetch data from url and wait for response
    const response = await fetch(url);
    // Get JSON data from response
    const data = await response.json();
    // Output the Array data from the JSON
    //console.table(data.prophets);  
    // Create HTML card for every prophet
    displayProphets(data.prophets);
}

/**
 * Loop through every prophet in the Array and create an
 * HTML card
 * @param {Array} prophets Array of prophets
 */
function displayProphets(prophets) {
    // select the output container element
    const cards = document.querySelector('div.cards'); 
    // loop through every prophet
    prophets.forEach((prophet) => {
        // create elements to add to the div.cards element
        let card = document.createElement('section');
        let cardbody = document.createElement('div');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let pbirth = document.createElement('p');
        let pdeath = document.createElement('p');
        let pyears = document.createElement('p');
        let pchildren = document.createElement('p');
        
        // Add card styles
        card.setAttribute("class", "card");
        cardbody.setAttribute("class", "card-body");

        // Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        h2.setAttribute("class", "card-title");
    
        // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');

        // Build and append the p content to show date and place of birth
        pbirth.innerText = `Born on ${prophet.birthdate} in ${prophet.birthplace}`;
        pbirth.setAttribute("class", "card-text");

        // Build the p content to show date of death
        pdeath.innerText = `Date of death: ${prophet.death}`;
        pdeath.setAttribute("class", "card-text");

        // Build and append the p content to show years as prophet
        pyears.innerText = `Years as Prophet: ${prophet.length}`;
        pyears.setAttribute("class", "card-text");

        // Build the p content to show number of children
        pchildren.innerText = `Number of children: ${prophet.numofchildren}`;
        pchildren.setAttribute("class", "card-text");

        // Append the card body with the created elements
        cardbody.appendChild(h2);
        cardbody.appendChild(pbirth);
        cardbody.appendChild(pdeath);
        cardbody.appendChild(pyears);
        cardbody.appendChild(pchildren);

        // Append the section(card) with the created elements
        card.appendChild(portrait);
        card.appendChild(cardbody);

    
        cards.appendChild(card);
    });
}

// Call function
getProphetData();