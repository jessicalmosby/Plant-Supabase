export function renderPlantCard(plant) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const a = document.createElement('a');

    div.classList.add('plant-card');

    p.textContent = plant.name;
    img.src = `./assets/${plant.type}.jpeg`;
    a.href = `./detail/?id=${plant.id}`;

    div.append(p, img);

    a.append(div);

    return a;
}

export function renderPlantDetail(plant) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const descriptionEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const sunEl = document.createElement('p');
    const petEl = document.createElement('p');
    const sunAndPetEl = document.createElement('div');

    div.classList.add('plant-detail');

    nameEl.textContent = plant.name;
    nameEl.classList.add('name');

    descriptionEl.textContent = plant.description;
    descriptionEl.classList.add('description');

    sunEl.textContent = `${plant.sun}`;
    sunEl.classList.add('sun');

    petEl.textContent = `${plant.pet}`;
    petEl.classList.add('pet');

    sunAndPetEl.classList.add('sun-and-pet');

    sunAndPetEl.append(sunEl, petEl);

    img.src = `../assets/${plant.type}.jpeg`;

    div.append(nameEl, img, sunAndPetEl, descriptionEl);

    return div;
}
