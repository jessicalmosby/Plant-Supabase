/* Imports */
import { getPlants } from './fetch-utils.js';
import { renderPlantCard } from './render-utils.js';

/* Get DOM Elements */
const plantListContainer = document.getElementById('plant-list-container');

/* State */

/* Events */
window.addEventListener('load', async () => {
    const plants = await getPlants();
    for (let plant of plants) {
        const plantEl = renderPlantCard(plant);
        plantListContainer.append(plantEl);
    }
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
