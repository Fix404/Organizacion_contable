// Se debe recoger el texto:
const textButton=document.getElementById("sendData");

textButton.addEventListener("click", () => {
    const rawTextHTML=document.getElementById("rawText");
    const rawText=rawTextHTML.value;
    let codifiedText="";

    codifiedText=codifier(rawText);

    const codifiedTextHTML=document.getElementById("processedData");
    codifiedTextHTML.textContent=`Texto encriptado: ${codifiedText}`;

    decodifier(codifiedText);

});

function codifier(text){
    const letters="abcdefghijklmnñopqrstuvwxyz";
    let procText="";
    const letterStats=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    for(let i=0; i<text.length; i++){
        if(letters.includes(text[i].toLocaleLowerCase())){
            letterStats[letters.indexOf(text[i].toLocaleLowerCase())]+=1;
            if ((letters.indexOf(text[i].toLocaleLowerCase())-4) >=0){
                procText+=`${letters[letters.indexOf(text[i].toLocaleLowerCase())-4]}`;
            }else{
                procText+=`${letters[(letters.length) +(letters.indexOf(text[i].toLocaleLowerCase())-4)]}`
            }
        }else if(text[i]==" "){
            procText+=" ";
        }
    }

    let presentLetter=0;

    for (let i=0; i<27; i++){
        if(letterStats[i] != 0){
            presentLetter+=1;
        }
    }

    for (let i=0; i<27; i++){
        if(letterStats[i] != 0){
            console.log("El porcentaje de aparición de la letra ", letters[i], " es de: ", (letterStats[i]/presentLetter)*100, "%");
        }
    }
    console.log(letterStats);
    return procText;
}


function decodifier(text){
    const letters="abcdefghijklmnñopqrstuvwxyz";

    for(let j=1; j<letters.length; j++){
        let deProcText="";
        for(let i=0; i<text.length; i++){
            if(letters.includes(text[i].toLocaleLowerCase())){
                if ((letters.indexOf(text[i].toLocaleLowerCase())+j) < letters.length){
                    deProcText+=`${letters[letters.indexOf(text[i].toLocaleLowerCase())+j]}`;
                }else{
                    deProcText+=`${letters[(letters.indexOf(text[i].toLocaleLowerCase())+j)-letters.length]}`;
                }
            }else if(text[i]==" "){
                deProcText+=" ";
            }
        }

        console.log(deProcText);
    }
}