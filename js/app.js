// =====================================================
// GAMEZONE - JavaScript
// Práctica educativa de JavaScript
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector("#startButton");

    startButton.addEventListener("click", () => {
        alert("¡Bienvenido a GameZone! Comienza la práctica.");
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const playButtons = document.querySelectorAll(".game-card button");

    playButtons.forEach((button) => {

        button.addEventListener("click", () => {
            alert("🎮 ¡Has comenzado a jugar!");
        });

    });

});

