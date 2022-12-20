const fs = require("fs");  // on importe le module filesystem
  
let directory_name = (__dirname + "/../TP_2");

// Fonction pour obtenir les noms de fichiers actuels dans le repertoire
let filenames = fs.readdirSync(directory_name);
  
console.log("\nDossiers du répertoire:");
filenames.forEach((file) => {
    console.log('► ', file);
});