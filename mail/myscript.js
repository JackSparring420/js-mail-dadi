const listMail = ["giovannino@gmail.com", "marco@gmail.com", "emanuele@gmail.com", "paolino@gmail.com"];
console.log(listMail)
const mess = document.getElementById("sms")

// mail utente
const mailUser = prompt("inserisci la tua mail")
let found = false;

for (let i = 0; i < listMail.length; i++){
    if (mailUser == listMail[i]) {
        found = true;
    }
}

if (found == true) {
    mess.innerHTML = "mail trovata";
} else {
    mess.innerHTML = "mail non valida"
}