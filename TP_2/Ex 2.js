//2
const fs = require('fs')

const data = fs.writeFileSync('text.txt','le texte à été modifié !', 'utf8') //permet de réécrire un fichier
console.log('le fichier à été modifié !')
