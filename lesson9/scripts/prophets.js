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
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
    
        // Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${prophet.name} ${prophet.lastname}`;
    
        // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
    
        // Append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(portrait);
    
        cards.appendChild(card);
    });
}

// Call function
getProphetData();