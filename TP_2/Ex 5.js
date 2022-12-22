const fs = require("fs")

fs.appendFile("fichier.txt", "belle création",(err) => { //appedFile permet de créer un fichier 
    if (err) throw err;
    console.log('fichier correctement créé');
  });