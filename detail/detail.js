import { getPlant } from '../fetch-utils.js';
import { renderPlantDetail } from '../render-utils.js';

const plantDetailContainer = document.getElementById('plant-detail-container');

window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const plant = await getPlant(id);
    const plantDetailEl = renderPlantDetail(plant);
    plantDetailContainer.append(plantDetailEl);
});
