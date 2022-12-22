const path = require('path');

let result = path.basename('OneDrive/Bureau/Node JS/TP_2');  //donne le dernier dossier du chemin d'accès ( dans ce cas TP_2)
console.log(result);
console.log(path.extname('index.html')); //donne le format du fichier indiqué