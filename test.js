const fs = require('fs')

try {
    const data = fs.writeFileSync('1.txt','le texte à été modifié', 'utf8')
    console.log('le fichier à été modifié')
  } catch (err) {
    console.log("le fichier n'existe pas")
  }