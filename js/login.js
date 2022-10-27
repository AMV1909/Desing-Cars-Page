import { users } from "./users.js";

const form = document.getElementById("form");

addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.email.value;
    const password = form.password.value;
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
        location.href = "home.html";
    } else {
        document.getElementById("error").innerHTML = "Usuario y/o contraseña incorrectos";
    }
});