// =====================================================
// GAMEZONE - JavaScript
// Práctica educativa de JavaScript
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector("#startButton");

    startButton.addEventListener("click", () => {
        alert("¡Bienvenido a GameZone! Comienza la práctica.");
    });

    const playButtons = document.querySelectorAll(".playButton");

    playButtons.forEach((button) => {
        button.addEventListener("click", () => {
            alert("Has comenzado el juego");
        });
    });
});
