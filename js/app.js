// =====================================================
// GAMEZONE - JavaScript
// Práctica educativa de JavaScript
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.querySelector("#startButton");
    // jbc lineas 8-9
    const mensaje = document.querySelector("#mensaje");

    startButton.addEventListener("click", () => {
        alert("¡Bienvenido a GameZone! Comienza la práctica.");
    });
    // jbc linas 14-17 primer boton
    mensaje.addEventListener("click", () => {
        alert("No te vicies.");
    });
});

    // aqui sale un mensaje al pulsar el boton de jugar 
    const botonesJugar = document.querySelectorAll(".game-card button");

    botonesJugar.forEach(boton => {
        boton.addEventListener("click", () => {
            alert("¡Cargando el juego! Prepárate para jugar.");
        });
    });
});
