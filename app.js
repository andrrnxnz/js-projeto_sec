let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo de Advinhação';
let subTitulo = document.querySelector('p');
subTitulo.innerHTML = 'Escolha um número entre 1 e 100';

let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo de Adivinhação');
exibirTextoNaTela('p', 'Escolha um Número entre 1 e 100');

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100) + 1;
}

let tentativas = 10;

function verificarChute() {
    console.log(tentativas)
    let chute = parseInt(document.querySelector('input').value);
    console.log(chute === numeroSecreto);
    if (tentativas > 0) {
        if (chute === numeroSecreto) {
            exibirTextoNaTela('h1', 'Parabéns! Você Acertou!');
            exibirTextoNaTela('p', `O Número Secreto é ${numeroSecreto}.`);
        } else if (chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'Errou! O Número Secreto é Menor.');
            exibirTextoNaTela('p', `Você possui ${tentativas} Tentativas!`);
        } else {
            exibirTextoNaTela('h1', 'Errou! O Número Secreto é Maior.');
            exibirTextoNaTela('p', `Você possui ${tentativas} Tentativas!`);
        }
        tentativas--;
    } else {
        exibirTextoNaTela('h1', 'Errou!')
        exibirTextoNaTela('P', `Você não possui mais Tentativas.`)
    }
}