alert("Boas Vindas ao jogo do número secreto");
let numeroSecreto = 8;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao númeroSecreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    // se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas +1;
        tentativas ++;
    }

}


// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
//let contador = 1;
//while (contador <= 10) {
//    console.log(contador);
//    contador++;
//}

//Crie um programa de contagem regressiva. Peça um número ao usuario e conte deste número até 0, usando um loop while no console do navegador.
//let numeroMaximo = prompt("Digite um número para a contagem regressiva:");
//while (numeroMaximo >= 0) {
//    console.log(numeroMaximo);
//    numeroMaximo--;
//}

//Crie um programa de contagem progressiva. Peça um número ao usuario e conte de 0 até esté número, usando um loop while no console do navegador.
//let numeroMaximo = prompt("Digite um número para a contagem progregressiva:");;
//let contador = 0;
//while (contador <= numeroMaximo) {
//    console.log(contador);
//    contador++
//}