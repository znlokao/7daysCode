const numeroAdivinhacao = 3
let chute = ""
let acertou = false

for(let contador = 0; contador < 3; contador++){    
    chute = prompt("Tente adivinhar o número que estou pensando de 0 a 10:")
    if(chute == numeroAdivinhacao){
        alert(`Ora Ora, temos um vidente aqui kkk, você acertou! O número era ${numeroAdivinhacao}.`)
        acertou = true
        break;
    }
    alert("Errou 'míseravi'!")
}
if(!acertou){
    alert(`Tu não acertou! O número era ${numeroAdivinhacao}!`)
}