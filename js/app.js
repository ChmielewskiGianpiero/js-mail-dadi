
let access = false;

// - Chiedere all'utente tramite un prompt la sua email

let userEmail 

userEmail = prompt ("inserisci la tua email")
console.log (userEmail)


// - Controllare che sia nella lista di chi può accedere

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
    console.log("Email corretta")
}
else{
    console.log("Email sbagliata")
}