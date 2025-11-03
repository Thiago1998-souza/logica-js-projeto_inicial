// teste de commit
alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 2;
console.log(numeroSecreto)
let chute = prompt('Escolha um numero entre 1 e 10');

// se chute for igual ao numero secreto
if (chute == numeroSecreto) {
    alert(`Isso aí! você descobriu o numero secreto ${numeroSecreto}`);
} else {
    alert('Você errou :( ')
}