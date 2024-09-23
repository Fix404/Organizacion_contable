// Se debe recoger el texto:
const textButton=document.getElementById("sendData");
const fileInputHTML=document.getElementById("inputFile");

fileInputHTML.addEventListener("change", handleFileInput, false);

let fileContent="";


function handleFileInput(){
    const fileList=this.files[0];
    const reader=new FileReader();

    reader.onload=(event) => {
        fileContent=event.target.result;
    };

    reader.readAsText(fileList);
}

textButton.addEventListener("click", () => {
    let codifiedText="";
    let textStatsValues=textStats(fileContent);

    codifiedText=codifier(fileContent);

    const codifiedTextHTML=document.getElementById("processedData");
    codifiedTextHTML.textContent=`Texto encriptado: ${codifiedText}`;

    let decodifiedText="";
    const decodifiedetxtHTML=document.getElementById("deProcessedData");
    decodifiedText=decodifier(codifiedText);
    decodifiedetxtHTML.textContent=`Estadísticas: ${textStatsValues}`;

    for(let i=0; i<decodifiedText.length; i++){
        console.log(decodifiedText[i]);
    }

});

function textStats(text){
    const letters="abcdefghijklmnopqrstuvwxyz";
    const letterStats=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    for(let i=0; i<text.length; i++){
        letterStats[letters.indexOf(text[i].toLocaleLowerCase())]+=1;
    }

    let presentLetter=0;

    for (let i=0; i<letters.length; i++){
        if(letterStats[i] != 0){
            presentLetter+=letterStats[i];
        }
    }

    let stats="";

    for (let i=0; i<letters.length; i++){
        if(letterStats[i] != 0){
            stats+=`El porcentaje de aparición de la letra ${letters[i]} es de: ${(((letterStats[i]/presentLetter)*100)/100)*100}% /// `;
        }
    }

    console.log(letterStats);

    return stats;
}

function codifier(text){
    const letters="abcdefghijklmnopqrstuvwxyz";
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
        }else {
            procText+=text[i];
        }
    }

    return procText;
}


function decodifier(text){
    const letters="abcdefghijklmnopqrstuvwxyz";
    let deprocTextArray=[];

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

        deprocTextArray.push(deProcText+" ################### ");
    }

    return deprocTextArray;
}