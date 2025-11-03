// teste de commit
alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um numero entre 1 e 10');
    // se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        alert(`Isso aí! você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);  
        }
        // tentativas = tentativas + 1
        tentativas++
    }
}
