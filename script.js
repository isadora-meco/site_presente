const etapa1 = document.getElementById('etapa-1');
const etapa2 = document.getElementById('etapa-2');
const etapa3 = document.getElementById('etapa-3');

const botao1 = document.getElementById('botao-1');
const botao2 = document.getElementById('botao-2');

const linkFilme = document.getElementById('link-filme');
const chuvaContainer = document.querySelector('.chuva-container');

linkFilme.href = "www.netflix.com/watch/81246107";

const emojis = ['💜', '✨'];

function iniciarChuva() {
    chuvaContainer.innerHTML = ''; 

    for (let i = 0; i < 30; i++) {
        const emoji = document.createElement('span');
        emoji.classList.add('emoji');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        emoji.style.left = `${Math.random() * 100}vw`;
        
        emoji.style.animationDelay = `${Math.random() * 2}s`;
        emoji.style.animationDuration = `${Math.random() * 3 + 2}s`;
        
        chuvaContainer.appendChild(emoji);
    }
}

botao1.addEventListener('click', () => {
    iniciarChuva();
    
    setTimeout(() => {
        etapa1.classList.remove('ativa');
        etapa2.classList.add('ativa');
    }, 1500); 
});

botao2.addEventListener('click', () => {
    iniciarChuva();

    setTimeout(() => {
        etapa2.classList.remove('ativa');
        etapa3.classList.add('ativa');
    }, 1500); 
});