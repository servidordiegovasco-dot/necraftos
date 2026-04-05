// click-sound.js

const clickSound = new Audio('https://www.myinstants.com/media/sounds/minecraft_click.mp3');

clickSound.volume = 0.4;   // ajuste o volume aqui (0.2 a 0.6 costuma ficar bom)

// Toca som em QUALQUER clique no site inteiro
document.addEventListener('click', () => {
    clickSound.currentTime = 0;     // reinicia o som para tocar várias vezes seguidas
    clickSound.play().catch(() => {}); // ignora erro se o navegador bloquear o som
});