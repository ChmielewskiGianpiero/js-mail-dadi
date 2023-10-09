

// - Chiedere all'utente tramite un prompt la sua email
let userEmail 

userEmail = prompt ("inserisci la tua email")
console.log (userEmail)


// - Controllare che sia nella lista di chi può accedere
let access = false;

//      - Dichiarare l'array con l'email accettate
const emailAccepted = ["mario@gmail.com", "luca@gmail.com", "gianpiero@gmail.com"];


//      - Dichiarare il ciclo di controllo dell'email
const lenghtArray = emailAccepted.length

for (let i = 0; i < lenghtArray; i++){
    let emailSelected = emailAccepted[i] 

//      - SE l'email rientra tra quelle accettate
    if (userEmail === emailSelected){
        access = true
    }
}

if (access === true){
    let userPlayer = prompt("Scegli un numero da 1 a 6")
    let pcPlayer = Math.floor(Math.random() * (6 - 1) + 1);
    console.log("Email corretta")
    console.log(userPlayer)
    console.log(pcPlayer)
}
else{
    console.log("Email sbagliata")
}