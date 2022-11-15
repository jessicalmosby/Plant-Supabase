export function renderPlantCard(plant) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const a = document.createElement('a');

    div.classList.add('plant-card');

    p.textContent = plant.name;
    img.src = `./assets/${plant.type}.jpeg`;
    a.href = `.detail/?id=${plant.id}`;

    div.append(p, img);

    a.append(div);

    return a;
}
