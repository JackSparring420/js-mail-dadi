const risultato = document.getElementById("stamp")

// Dado utente
const dadoA = Math.floor(Math.random() * 6) + 1;
console.log(dadoA)


// dado computer
const dadoB = Math.floor(Math.random() * 6) + 1;
console.log(dadoB)



if (dadoA > dadoB) {
    risultato.innerHTML = "Hai vinto"    
} else if (dadoA == dadoB) {
    risultato.innerHTML = "Pareggio"  
} else if (dadoA < dadoB) {
    risultato.innerHTML = "Hai perso"     
}

