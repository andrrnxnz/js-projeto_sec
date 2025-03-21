let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo de Advinhação';
let subTitulo = document.querySelector('p');
subTitulo.innerHTML = 'Escolha um número entre 1 e 100';

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1' , 'Jogo de Adivinhação')
exibirTextoNaTela('p' , 'Escolha um Número entre 1 e 100')

function verificarChute() {
    alert('Apertou o Botão')
}