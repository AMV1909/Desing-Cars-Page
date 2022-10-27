import { cars } from './cars.js';

var counter = 1;

cars.forEach((car, index) => {
    document.getElementById("slides").innerHTML += `
        <input type="radio" name="radio-btn" id="radio${index + 1}" ${index === 0 ? "checked" : ""}>
    `;

    document.styleSheets[1].insertRule(`
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
        <label for="radio${index + 1}" class="manual-btn" id="label${index + 1}"></label>
    `;
});

document.getElementById("right").addEventListener("click", () => {
    counter++;
    if (counter > cars.length) {
        counter = 1;
    }
    document.getElementById(`radio${counter}`).checked = true;
});

document.getElementById("left").addEventListener("click", () => {
    counter--;
    if (counter < 1) {
        counter = cars.length;
    }
    document.getElementById(`radio${counter}`).checked = true;
});

document.getElementById("info").addEventListener("click", () => {
    location.href = "catalogo.html";
});