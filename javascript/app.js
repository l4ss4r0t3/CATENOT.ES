// VARIÁVEIS PARA CONTAINER PRINCIPAL E O WORLD
const windowContainer = document.getElementById('window');
const worldContainer = document.getElementById('world');

// VARIÁVEIS PARA O PAN E ZOOM
let offsetX = 0;
let offsetY = 0;
let scale = 1;
let isPanning = false;
let mouseX = 0;
let mouseY = 0;

// LISTENER QUE SALVA A CORDENADA EM QUE O MOUSE FOI CLICADO
windowContainer.addEventListener('mousedown', () => {
    isPanning = true;
    mouseX = event.clientX;
    mouseY = event.clientY;
});
// LISTENER QUE ATUALIZA A POSIÇÃO DO WORLD DE ACORDO COM A CORDENADA DO MOUSE
windowContainer.addEventListener('mousemove', () => {
    if (isPanning) {
        offsetX += event.clientX - mouseX;
        offsetY += event.clientY - mouseY;
        mouseX = event.clientX;
        mouseY = event.clientY;
        worldContainer.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
});
// LISTENER PARA INTERROMPER A MOVIMENTAÇÃO DO WORLD
// (NO OBJETO GLOBAL DO BROWSER PARA EVITAR O "MOUSE PRESO")
window.addEventListener('mouseup', () => {
    isPanning = false;
});