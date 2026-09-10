// =====================================================
// GAMEZONE - JavaScript
// Práctica educativa de JavaScript
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector("#startButton");

    startButton.addEventListener("click", () => {
        alert("¡Bienvenido a GameZone! Comienza la práctica.");
    });

    // aqui sale un mensaje al pulsar el boton de jugar 
    const botonesJugar = document.querySelectorAll(".game-card button");

    botonesJugar.forEach(boton => {
        boton.addEventListener("click", () => {
            alert("¡Cargando el juego! Prepárate para jugar.");
        });
    });
});