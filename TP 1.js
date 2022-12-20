//1
//on fait la somme de a et b
function sum(a, b){
    c = a + b
    return c
}

console.log(sum(1, 2));


//2
//on def une liste de nombres
const myArr = [90, 280, 250, 125, 200, 50];
function sup(array){
    let i = 0;
    
    for (let index = 0; index < array.length; index++) {  //on fait une boucle tant qu'on a pas testé tout le nombres pour avoir le plsu grand
        const element = array[index]; 

        if (element > i){
            i = element;
        }      
    
    } 
    return i;
}

console.log(sup(myArr));

//3
string = "Bonjour";
function remVoy(str)
{
    let al = [ 'a', 'e', 'i', 'o', 'u',        //on definis les voyelles
               'A', 'E', 'I', 'O', 'U' ];
    let result = "";                         // ca correspond à quand les voyelles sont remplacées
     
    for(let i = 0; i < str.length; i++)   //on fait une boucle pour tester chaque lettre afin de voir si elles sont dans la liste de voyelles
    {
         
        if (!al.includes(str[i]))
        {
            result += str[i];
        }
    }
    return result;
}
console.log(remVoy(string))

//4
const arr = ["Matthieu", "Jessim", "Maxime","Tomate", "Abricot"];  //on def une liste de mots
const sortedArray = arr.sort(function (a, b) {          //on trie puis on les compare entre eux
    return a.localeCompare(b);
});

console.log(sortedArray);

//5
//npm install --save convertir-nombre-lettre
//salution de facilité mais qui marche je recommande ^^

function WriteNum(Numbers){
    const { NumberToLetter } = require("convertir-nombre-lettre");
    return NumberToLetter(Numbers);
}
console.log(WriteNum(6541906789))

//version plus longue...(sans biblio)

Numbe = 97

function NumberToLetter(nombre, U=null, D=null) {
    //def les mots assignés à haque chiffre
    const letter = {0: "zéro", 1: "un", 2: "deux", 3: "trois", 4: "quatre", 5: "cinq",6: "six",7: "sept",8: "huit",9: "neuf",10: "dix",11: "onze",12: "douze",
13: "treize", 14: "quatorze", 15: "quinze", 16: "seize", 17: "dix-sept", 18: "dix-huit", 19: "dix-neuf", 20: "vingt", 30: "trente", 40: "quarante", 50: "cinquante", 60: "soixante", 70: "soixante-dix", 80: "quatre-vingt", 90: "quatre-vingt-dix"};
    
    let n, quotient, reste, nb;
    let numberToLetter = '';

    nb = parseFloat(nombre.toString().replace(/ /gi, "")); //convertit nombres en chaine de caractère
    
    n = nb.toString().length; //renvoie la longuer de la caine de caractère qui représente l'objet
    switch (n) {
        case 1:
            numberToLetter = letter[nb];        //assigne la chaine de caractère correspondante au chiffre/nombre compris entre 0 et 19
            break;
        case 2:
            if (nb > 19) {         //pour tout les nombres supérieurs à 19 ( et inférieurs à 100 - implicite) assigner et additionner les chaines de caratères correspondantes
                quotient = Math.floor(nb / 10); 
                reste = nb % 10;
                if (nb < 71 || (nb > 79 && nb < 91)) {
                    if (reste == 0) numberToLetter = letter[quotient * 10];
                    if (reste == 1) numberToLetter = letter[quotient * 10] + "-et-" + letter[reste];
                    if (reste > 1) numberToLetter = letter[quotient * 10] + "-" + letter[reste];
                } else numberToLetter = letter[(quotient - 1) * 10] + "-" + letter[10 + reste];
            } else numberToLetter = letter[nb];
            break;
    }
    if (numberToLetter.substr(numberToLetter.length - "quatre-vingt".length, "quatre-vingt".length) == "quatre-vingt") numberToLetter = numberToLetter + "s";

    return numberToLetter;

}

console.log(NumberToLetter(Numbe));

//6

const Equipe = [{ nom: " Jean ", age: " 27 ", poste: " Ingénieur " },  //On definit un tableau avec deux objects et leurs attributs respectifs
    { nom: " Ben ", age: " 21 ", poste: " stagiaire "}];
let pres

function propObj(array){

    function presentation(){          //met en pratique l'utilisation d'attributs du tableau les affichants avec des Chaines de caractère
        pres = ("Je m'apelle" + this.nom + "j'ai" + this.age + "ans et je suis" + this.poste)
    };

    Equipe[0].presentation = presentation;         //on ajoute presentation aux ojects
    Equipe[1].presentation = presentation;
    Equipe[0].presentation();
    return pres
};

console.log(propObj(Equipe));


//7
Numb = [1, 7, 2, 10, 8];
 
function triDec(tab){                 // la fonction utilise la méthode sort pour comparer et trié les éléments de "Numb"
    const sortDesc = (a, b) => b - a;
    tab.sort(sortDesc);
    return tab;
}
console.log(triDec(Numb));

//8
let Maj = "Test, Coucou, hello, Pomme"

function UpVoyel(stri) {          //on utilise la metode split pour diviser un string et envoyer dans un tableau, puis on join pour en remplacer les éléments
    stri = stri.split("a").join("A").split("e").join("E").split("i").join("I").split("o").join("O").split("u").join("U").split("y").join("Y");
    return stri;

}

console.log(UpVoyel(Maj))

//9
nom = "Matthieu";
function compterNbVoyelles(mot) {
    let nbVoyelles = 0;
    let voyelles = ['a', 'e', 'i', 'o', 'u', 'y']; //on definis les voyelles
    for (let lettre of mot) {        //on boucle pour tester chaque caractère de "nom" et tester pour ajouter +1 a "nbVoyelles" à chaque fois qu'il voit une voyelle
        if (voyelles.includes(lettre.toLowerCase())) {
            nbVoyelles ++;
        }
    }
    return nbVoyelles;
}
console.log(compterNbVoyelles(nom))

//10

function name(params) {           //remplace grâce à replaceAll chaque consone 
    params = params.replaceAll("b", "B")
    params = params.replaceAll("c", "C")
    params = params.replaceAll("d", "D")
    params = params.replaceAll("f", "F")
    params = params.replaceAll("g", "G")
    params = params.replaceAll("h", "H")
    params = params.replaceAll("j", "J")
    params = params.replaceAll("k", "K")
    params = params.replaceAll("l", "L")
    params = params.replaceAll("m", "M")
    params = params.replaceAll("n", "N")
    params = params.replaceAll("p", "P")
    params = params.replaceAll("q", "Q")
    params = params.replaceAll("r", "R")
    params = params.replaceAll("s", "S")
    params = params.replaceAll("t", "T")
    params = params.replaceAll("v", "V")
    params = params.replaceAll("w", "W")
    params = params.replaceAll("x", "X")
    params = params.replaceAll("z", "Z")
    return params
}

console.log(name(Maj))