//Extraire les variables de ma page speech.html
let pilote=document.querySelector('#pilote');
//let atc=document.querySelector("#atc");
let title=document.querySelector('#title');
let atc=document.querySelector('#atc');

jsonReader();                
                        

//Cette fonction va lire le contenu du fichier Json
function jsonReader() {
    let requestURL = 'https://safaawiran.github.io/speechRecognition/myJson.json';

    let request = new XMLHttpRequest();
    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function () {
        let myJson = request.response;
        //ajouter du contenu à la page HTML à partir de json
        pilote.innerHTML = myJson["0"]["pilote"] ;
        title.innerHTML = myJson["0"]["titre"].toUpperCase();
        atc.innerHTML = myJson["0"]["atc"];
    }

    
}


