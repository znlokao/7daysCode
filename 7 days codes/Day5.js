let Frutas = []
let Laticinios = []
let Doces = []
let Congelados = []
let Comida = ""
let Categoria = ""

let adicionarMais = "sim" 
while(adicionarMais != "não"){
    adicionarMais = prompt("Quer adicionar comida a sua lista de compras? Digite 'sim' ou 'não'.")
    while (adicionarMais != "sim" && adicionarMais != "não") {
	alert(`Caractere inválido!`)
        adicionarMais = prompt("Quer adicionar comida a sua lista de compras? Digite 'sim' ou 'não'.")
    }
	
    if (adicionarMais === "não"){
        break
    }
	
    comida = prompt("Qual alimento você quer adicionar?")
    categoria = prompt("Em qual categoria este alimento se encaixa: 'Frutas', 'Laticínios', 'Doces' ou 'Congelados'?")
    if(categoria === 'Frutas'){
        Frutas.push(comida);
    } else if (categoria === 'Laticínios'){
        Laticinios.push(comida);
    } else if (categoria === 'Doces'){
        Doces.push(comida);
    } else if (categoria === 'Congelados'){
        Congelados.push(comida);
    } else {
        alert("Esta categoria não existe.")
    }
}
alert(`Lista de compras:\n  Frutas: ${Frutas}\n  Laticínios: ${Laticinios}\n  Doces: ${Doces}\n  Congelados: ${Congelados}`)