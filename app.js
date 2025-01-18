let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); 
console.log(numeroSecreto);   
alert("Jogo de adivinhar numero"); 
let chute // descobri que da para declarar variaveis sem colocar o recebe e colocar o recebe "=" depois como fiz aqui na linha 8 (chute = parseInt(prompt("escolha um numero entre 0 e 100"));)
let numerotentativas = 1

while ( chute != numeroSecreto) {
    chute = parseInt(prompt(`escolha um numero entre 0 e ${numeroMaximo}`));
    
    if (chute == numeroSecreto) {
        let palavraTentativa = numerotentativas > 1 ? "tentativas" : "tentativa" ;
        alert(`Parabens, vc acertou com ${numerotentativas} ${palavraTentativa}`);
    } else if ( chute < numeroSecreto) {
        alert("vc errou, o numero secreto e maior. ");
    } else if ( chute > numeroSecreto) {
        alert("vc errou, o numero secreto e menor. ");
    }
    numerotentativas++
}
 

    // if (numerotentativas > 1) {
    //     alert("Parabens, vc acertou com " + numerotentativas + " tentativas");
    // } else {
    //     alert("Parabens, vc acertou com " + numerotentativas + " tentativa");
    // }

//Alguns deveres da plataforma

// let contador = 10

// while (contador >= 0) {
//     console.log(contador)
//     contador--
// }

//     document.write("<br>");

// let contador2 = 1;
// while (contador2 <= 10) {
//     console.log(contador2);
//     contador2++;
// }

// document.write("</br>");

// let numeroMaximo = prompt("Digite um número para a contagem regressiva:");

// while (numeroMaximo >= 0) {
//     console.log(numeroMaximo);
//     numeroMaximo--;
// }

// let numeroMaximo2 = prompt("Digite um número para a contagem progressiva:");
// let contador4 = 0
// while (contador4 <= numeroMaximo2) {
//     console.log(contador4);
//     contador4++;
// }
