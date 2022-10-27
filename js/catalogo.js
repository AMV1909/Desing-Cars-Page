import { cars } from './cars.js';

if (cars.length < 1) {
    document.getElementById("cars").innerHTML = `
        <div class="card">
            <div class="no-data">
                <h2>No se encontraron resultados</h2>
            </div>
        </div>
    `;
} else {
    cars.forEach(car => {
        document.getElementById("cars").innerHTML += `
            <div class="card">
                <img src="${car.image}" alt="${car.name}">
                <div class="card-body">
                    <h2>${car.name}</h2>
                    <p class="first">Marca: </p>${car.mark}
                    <p>Modelo: </p>${car.model}
                    <p>Cilindraje: </p>${car.cylinderCapacity}
                    <p>Año: </p>${car.year}
                    <p>Color: </p>${car.color}
                    <p>Categoría: </p>${car.category}
                    <h4>Descripción: </h4>${car.description}
                </div>
            </div>
        `;

        document.getElementById("mark").innerHTML += `
            ${document.getElementById(car.mark) ? "" : `<option value="${car.mark}" id="${car.mark}">${car.mark}</option>`}
        `;

        document.getElementById("category").innerHTML += `
            ${document.getElementById(car.category) ? "" : `<option value="${car.category}" id="${car.category}">${car.category}</option>`}
        `;

        document.getElementById("year").innerHTML += `
            ${document.getElementById(car.year) ? "" : `<option value="${car.year}" id="${car.year}">${car.year}</option>`}
        `;

        document.getElementById("color").innerHTML += `
            ${document.getElementById(car.color) ? "" : `<option value="${car.color}" id="${car.color}">${car.color}</option>`}
        `;
    });
}

cars.length < 3 ? document.getElementById("cars").style.height = "75vh" : document.getElementById("cars").style.height = "auto";

addEventListener("submit", e => {
    e.preventDefault();
    const mark = document.getElementById("mark").value;
    const minCilindraje = document.getElementById("min").value;
    const maxCilindraje = document.getElementById("max").value;
    const category = document.getElementById("category").value;
    const year = document.getElementById("year").value;
    const color = document.getElementById("color").value;

    const filteredCars = cars.filter(car => {
        return (mark ? car.mark == mark : true) && (minCilindraje ? car.cylinderCapacity >= minCilindraje : true) && (maxCilindraje ? car.cylinderCapacity <= maxCilindraje : true) && (category ? car.category == category : true) && (year ? car.year == year : true) && (color ? car.color == color : true);
    });

    document.getElementById("cars").innerHTML = "";

    if (filteredCars.length < 1) {
        document.getElementById("cars").innerHTML = `
            <div class="card">
                <div class="no-data">
                    <h2>No se encontraron resultados</h2>
                </div>
            </div>
        `;
    } else {
        filteredCars.forEach(car => {
            document.getElementById("cars").innerHTML += `
                <div class="card">
                    <img src="${car.image}" alt="${car.name}">
                    <div class="card-body">
                        <h2>${car.name}</h2>
                        <p class="first">Marca: </p>${car.mark}
                        <p>Modelo: </p>${car.model}
                        <p>Cilindraje: </p>${car.cylinderCapacity}
                        <p>Año: </p>${car.year}
                        <p>Color: </p>${car.color}
                        <p>Categoría: </p>${car.category}
                        <h4>Descripción: </h4>${car.description}
                    </div>
                </div>
            `;
        });
    }

    filteredCars.length < 3 ? document.getElementById("cars").style.height = "75vh" : document.getElementById("cars").style.height = "auto";
});