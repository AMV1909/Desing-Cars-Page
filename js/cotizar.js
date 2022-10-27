document.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("message").style.display = "flex";
});

function gotoindex() {
    location.href = "index.html";
}