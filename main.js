// Datos de usuario
const realPass=document.getElementById("password").value;
const buttonSend=document.getElementById("sendData");

// Algoritmo de vulneración

buttonSend.addEventListener("click", () =>{
    const possibleAlphabeticalValues="abcdefghijklmnopqrstuvwxyz";
const possibleNumericalvalues="0123456789";
let passwordTry="";
let attempts=0;

while (passwordTry != realPass && attempts < 20){
    attempts+=1;
    passwordTry=bruteCheck1(possibleAlphabeticalValues);
    console.log(passwordTry);
    console.log("---")
}

function bruteCheck1(letters){
    let passwordTry="";
    let j=0;
    for (let i=0; i<4; i++){
        j=Math.floor(Math.random() * letters.length);
        passwordTry+=letters[j];
    }
    return passwordTry;
}
});