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
    console.log('Apertou o Botão')
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100) + 1;
}

let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    console.log(chute === numeroSecreto);
}