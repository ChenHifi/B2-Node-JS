const fs = require("fs")

fs.appendFile("fichier.txt", "belle création",(err) => {
    if (err) throw err;
    console.log('fichier correctement créé');
  });