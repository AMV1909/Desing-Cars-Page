import { cars } from './cars.js';

var car = 1;

cars.forEach((car, index) => {
    document.getElementById("slides").innerHTML += `
        <input type="radio" name="radio-btn" id="radio${index + 1}" ${index === 0 ? "checked" : ""}>
    `;

    document.styleSheets[2].insertRule(`
        #radio${index + 1}:checked ~ .first {
            margin-left: ${index * -20}%;
        }
    `);
});

cars.forEach((car, index) => {
    document.getElementById("slides").innerHTML += `
        <div class="slide${index == 0 ? " first" : ""}">
            <div id="car${index + 1}">
        </div>
    `;

    document.getElementById(`car${index + 1}`).style.cssText = `
        background-image: url(${car.image});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 100%;
        width: 100%;
    `;
});

cars.forEach((car, index) => {
    document.getElementById("navigation-manual").innerHTML += `
        <label for="radio${index + 1}" class="manual-btn"></label>
    `;
});

document.getElementById("right").addEventListener("click", () => {
    car++;
    if (car > cars.length) {
        car = 1;
    }
    document.getElementById(`radio${car}`).checked = true;
});

document.getElementById("left").addEventListener("click", () => {
    car--;
    if (car < 1) {
        car = cars.length;
    }
    document.getElementById(`radio${car}`).checked = true;
});

cars.forEach((car, index) => {
    document.getElementById("report-content").innerHTML += `
        <div class="report">
            <div class="carName">
                <h2>${car.name}</h2>
            </div>

            <div class="p">
                    <p>Cantidad Vendida:</p>
                    <p>Cantidad Disponible:</p>
            </div>

            <div class="i">
                <p>${car.sold}</p>
                <p>${car.available}</p>
            </div>
        </div>
    `;
});

document.getElementById("openReport").addEventListener("click", () => {
    document.getElementById("modal").style.display = "flex";
});

document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});

document.getElementById("info").addEventListener("click", () => {
    location.href = "inventario.html";
});