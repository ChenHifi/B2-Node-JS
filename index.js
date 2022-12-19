console.log("hello world");

// ceci est un commentaire 

/**
 * 
 * 
 * ceci est un commentaire multiligne
 * 
 */

/**
 * On dispote de trois mot pour déclarer des variables
 * var, let et const
 */

var test = "bonjour";
let test2 = "le"; // mdifiable
const test3 = "monde!"; // constante n'est pas modifiable

//Numbers
const age = 23;

//Variable
let x;

//Chaîne de caractère (string)
const aRandomString = "text";

//Opérations
let additions = 4 + 4;

//Booleans  
let boolean = true;

//Objects
let name = {firstname: "Paul" , lastname: "Moulenot"};

//Arrays
let myArray = ["Banana", "Test", "Applications"]

//Arrays methods
function square(number) {
    return number * number;
}

//même fonction
//const square = (number) => {
//    return numer * number;
//}

const number = square(2)
console.log(number)

//ceci est un tableau
const myArr = [90, 280, 250, 125, 200, 50];

//l'index est a position d'un element dans le tableau
//le premier index est l'index 0

//boucle for (trouver le max du tbleau)

function sup(array){
    let i = 0;

    for (let index = 0; index < array.length; index++) {
        const element = array[index]; 

        if (element > i){
            i = element;
        }      
    
    } 
    return i;
}

console.log(sup(myArr));