const images = [
    'url("bmw.jpg")',
    'url("sasuke.jpg")',
    'url("spiderman.jpg")',
    'url("goku.jpg")'
];

let currentIndex = 0;

function changeBackground() {
    const background = document.getElementById('background');
    background.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 3000);

// Inicializa el fondo
changeBackground();
