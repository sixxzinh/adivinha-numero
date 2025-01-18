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
