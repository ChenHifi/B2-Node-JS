const http = require("http");
const fs = require('fs').promises;

const host = 'localhost';
const port = 8080;

const requestListener = function (req, res) { //on def la requete
    fs.readFile(__dirname + "/index.html") //permet de lire un fichier dans un seveur
    .then(contents => {
        res.setHeader("Content-Type", "text/html"); //on definit le type de fichier à ouvrir
        res.writeHead(200);
        res.end(contents);
    })
};


const server = http.createServer(requestListener);  //on crée le serveur 
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`); //on affiche si le serveur est en marche
});