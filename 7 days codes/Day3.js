const area = prompt("Em qual área deseja seguir? 'Front-end' ou 'Back-end'");
let linguagem = "";
if (area === "Front-end"){
    linguagem = prompt("Front-end: Qual dessas linguagens deseja aprender? 'React' ou 'Vue'.")
}
else if (area === "Back-end"){
    linguagem = prompt("Back-end: Qual dessas linguagens deseja aprender? 'C#' ou 'Java'.")
}
else {
    alert("Você não inseriu uma área válida!")
}

const continuaroufullstack = prompt("Se você quiser continuar na área escolhida, digite 'sim'. Caso queira se tornar Fullstack, digite 'F'.")
if (continuaroufullstack == sim){
    alert(`Muito bem, continue se aprimorando em ${linguagem} para ficar bom na área ${area}`)
}
else if (continuaroufullstack == F){
    alert(`Me diga outra linguagem que deseja aprender além de ${linguagem}, para se tornar um Fullstack?`)
}
else {
    alert("Você não um item válido!")
}

let msg = prompt("Existe mais alguma linguagem que você tem interesse em aprender? Digite 'ok'")
while (msg === "ok"){
    let outralinguagem = prompt("Qual seria?")
    alert(`${outralinguagem} é realmente uma linguagem muito boa!`)
    msg = prompt("Existe mais alguma linguagem que você tem interesse em aprender? Digite 'ok'")
}