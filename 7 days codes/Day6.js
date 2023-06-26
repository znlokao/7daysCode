let Frutas = []
let Laticinios = []
let Doces = []
let Congelados = []
let Comida = ""
let Categoria = ""
let Remover = ""

let adicionarMais = "sim"
while(adicionarMais != "não"){
    if(Frutas.length === 0 && Laticinios.length === 0 && Doces.length === 0 && Congelados.length === 0){
        adicionarMais = prompt("Quer adicionar comida a sua lista de compras? Digite 'sim' ou 'não'.")
    } else {
        adicionarMais = prompt("Quer adicionar comida a sua lista de compras? Digite 'sim', 'não' ou 'remover'.")
    }
	
    while (adicionarMais != "sim" && adicionarMais != "não" && adicionarMais != "remover") { 
	alert(`Caractere inválido!`)
        adicionarMais = prompt("Quer adicionar comida a sua lista de compras? Digite 'sim' ou 'não'.")
    }
	
    if (adicionarMais === "não"){  
	break
    }
	
    if(adicionarMais === "sim"){
        Comida = prompt("Qual alimento você quer adicionar?")
        Categoria = prompt("Em qual categoria este alimento se encaixa: 'Frutas', 'Laticínios', 'Doces' ou 'Congelados'?")
        if(Categoria === 'Frutas'){
            Frutas.push(Comida);
        } else if (Categoria === 'Laticínios'){
            Laticinios.push(Comida)
        } else if (Categoria === 'Doces'){
            Doces.push(Comida);
        } else if (Categoria === 'Congelados'){
            Congelados.push(Comida)
        } else {
            alert("Esta categoria não existe.")
        }
    } else if(adicionarMais === "remover"){
	if(Frutas.length === 0 && Laticinios.length === 0 && Doces.length === 0 && Congelados.length === 0){ 
		alert(`Não a nada na sua lista!`)
	} else { 
		Remover = prompt(`Lista de compras:\n  Frutas: ${Frutas}\n  Laticínios: ${Laticinios}\n  Doces: ${Doces}\n  Congelados: ${Congelados}\n\nQual alimento deseja remover?`)
		if(Frutas.indexOf(Remover) != -1){
			Frutas.splice(Frutas.indexOf(Remover), 1)
			alert(`O item ${Remover} foi removido com sucesso!`)
		} else if(Laticinios.indexOf(Remover) != -1){
			Laticinios.splice(Laticinios.indexOf(Remover), 1)
			alert(`O item ${Remover} foi removido com sucesso!`)
		} else if (Doces.indexOf(Remover) != -1){
			Doces.splice(Doces.indexOf(Remover), 1)
			alert(`O item ${Remover} foi removido com sucesso!`)
		} else if (Congelados.indexOf(Remover) != -1){
			Congelados.splice(Congelados.indexOf(Remover), 1)
			alert(`O item ${Remover} foi removido com sucesso!`)
		} else {
			alert(`Não foi possível encontrar o item dentro da lista!`)
		}
	}
    }
}
alert(`Lista de compras:\n  Frutas: ${Frutas}\n  Laticínios: ${Laticinios}\n  Doces: ${Doces}\n  Congelados: ${Congelados}`);