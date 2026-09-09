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
