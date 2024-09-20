// Datos de usuario
const buttonSend=document.getElementById("sendData");

buttonSend.addEventListener("click", () => {
    const realUserHTML=document.getElementById("user");
    const realPassHTML=document.getElementById("password");
    const realUser=realUserHTML.value;
    const realPass=realPassHTML.value;
    const dataArray=[realUser, realPass];
    console.log(dataArray);
    const pattern=/^[a-zA-Z]{4}$/;
    if(pattern.test(dataArray[1])){
        bruteForce1(dataArray);
    }

    const pattern2=/^[0-9]*$/;

    if(pattern2.test(dataArray[1])){
        bruteForce2(dataArray);
    }

    const pattern3=/^(?=(?:.*[a-zA-Z]){2})(?=(?:.*\d){2})[A-Za-z\d]{4}$/;
    if (pattern3.test(dataArray[1])){
        bruteForce3(dataArray);
    }

    

    const pattern4=/^[A-Za-z0-9]{8}$/;
    if (pattern4.test(dataArray[1])){
        bruteForce4(dataArray);
    }

    const pattern5=/^[A-Za-z0-9_!@#$%^&*()-+=]{8}$/;
    if(pattern5.test(dataArray[1])){
        bruteForce5(dataArray);
    }
});

function bruteForce1(data){
    let tryPass="aaaa";

    const letters="abcdefghijklmnopqrstuvwxyz";
    const startTime=new Date();

    for (let i=0; i<letters.length; i++){
        for( let j=0; j<letters.length; j++){
            for(let k=0; k<letters.length; k++){
                for(let l=0; l<letters.length; l++){
                    tryPass=`${letters[i]}${letters[j]}${letters[k]}${letters[l]}`;
                    //console.log(tryPass);

                    if(tryPass == data[1]){
                        console.log("Contraseña crackeada: "+tryPass);
                        const endTime=new Date();
                        const totalTime=endTime-startTime;
                        console.log("El tiempo requerido para crackear la constraseña fue de "+totalTime+" milisegundos")
                        return ;
                    }
                }
            }
        }
    }

}

function bruteForce2(data){
    let tryPass="0000"

    const startTime=new Date();

        for (let i=0; i<10; i++){
            for( let j=0; j<10; j++){
                for(let k=0; k<10; k++){
                    for(let l=0; l<10; l++){
                        tryPass=`${i}${j}${k}${l}`;
                        //console.log(tryPass);

                        if(tryPass == data[1]){
                            console.log("Contraseña crackeada: "+tryPass);
                            const endTime=new Date();
                            const totalTime=endTime-startTime;
                            console.log("El tiempo requerido para crackear la constraseña fue de "+totalTime+" milisegundos")
                            return ;
                        }
                    }
                }
            }
        }
}

function bruteForce3(data){
    const letters ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXYZ";
    const digits="0123456789";
    const startTime=new Date();

    let combinations = [];

    // Generate all combinations of 2 digits
    for (let i = 0; i < digits.length; i++) {
        for (let j = i + 1; j < digits.length; j++) {
            let digitPair = `${digits[i]}${digits[j]}`;

            // Generate all combinations of 2 letters
            for (let a = 0; a < letters.length; a++) {
                for (let b = a + 1; b < letters.length; b++) {
                    let letterPair = `${letters[a]}${letters[b]}`;

                    // Generate all permutations of the 2 digits and 2 letters
                    let chars = `${digitPair[0]}${digitPair[1]}${letterPair[0]}${letterPair[1]}`;

                    // Use a permutation function to get all possible arrangements
                    let perms = getPermutations(chars);
                    
                    //console.log(perms);

                    perms.forEach(element => {
                        if(element == data[1]){
                            console.log("Contraseña crackeada: "+element);
                            const endTime=new Date();
                            const totalTime=endTime-startTime;
                            console.log("El tiempo requerido para crackear la constraseña fue de "+totalTime+" milisegundos")
                            return ;
                        }
                        
                    });
                }
            }
        }
    }
}

function getPermutations(arr) {
    if (arr.length === 1) return [arr];
    
    let perms = [];
    for (let i = 0; i < arr.length; i++) {
        let char = arr[i];
        let remainingChars = arr.slice(0, i).concat(arr.slice(i + 1));
        let remainingPerms = getPermutations(remainingChars);
        for (let perm of remainingPerms) {
            perms.push(char+perm);
        }
    }
    return perms;
}

function bruteForce4(data){
    let tryPass="aaaaaaaa";
    const possibleCharacters ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789";
    const startTime=new Date();

    for (let i=0; i<possibleCharacters.length; i++){
        for( let j=0; j<possibleCharacters.length; j++){
            for(let k=0; k<possibleCharacters.length; k++){
                for(let l=0; l<possibleCharacters.length; l++){
                    for(let m=0; m<possibleCharacters.length; m++){
                        for(let n=0; n<possibleCharacters.length; n++){
                            for(let o=0; o<possibleCharacters.length; o++){
                                for(let p=0; p<possibleCharacters.length; p++){
                                    tryPass=`${possibleCharacters[i]}${possibleCharacters[j]}${possibleCharacters[k]}${possibleCharacters[l]}${possibleCharacters[m]}${possibleCharacters[n]}${possibleCharacters[o]}${possibleCharacters[p]}`;
                    console.log(tryPass);

                    if(tryPass == data[1]){
                        console.log("Contraseña crackeada: "+tryPass);
                        const endTime=new Date();
                        const totalTime=endTime-startTime;
                        console.log("El tiempo requerido para crackear la constraseña fue de "+totalTime+" milisegundos")
                        return ;
                    }
                                }
                            }
                        
                        }
                    }
                }
            }
        }
    }
}

function bruteForce5(data){
    let tryPass="aaaaaaaa";
    const possibleCharacters ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXYZ0123456789_!@#$%^&*()-+=";
    const startTime=new Date();

    for (let i=0; i<possibleCharacters.length; i++){
        for( let j=0; j<possibleCharacters.length; j++){
            for(let k=0; k<possibleCharacters.length; k++){
                for(let l=0; l<possibleCharacters.length; l++){
                    for(let m=0; m<possibleCharacters.length; m++){
                        for(let n=0; n<possibleCharacters.length; n++){
                            for(let o=0; o<possibleCharacters.length; o++){
                                for(let p=0; p<possibleCharacters.length; p++){
                                    tryPass=`${possibleCharacters[i]}${possibleCharacters[j]}${possibleCharacters[k]}${possibleCharacters[l]}${possibleCharacters[m]}${possibleCharacters[n]}${possibleCharacters[o]}${possibleCharacters[p]}`;
                    console.log(tryPass);

                    if(tryPass == data[1]){
                        console.log("Contraseña crackeada: "+tryPass);
                        const endTime=new Date();
                        const totalTime=endTime-startTime;
                        console.log("El tiempo requerido para crackear la constraseña fue de "+totalTime+" milisegundos")
                        return ;
                    }
                                }
                            }
                        
                        }
                    }
                }
            }
        }
    }
}