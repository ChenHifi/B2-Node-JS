

let map = ['✈',' ','◅']; //on définis nos sprites
a = 1;
i = 11;
id = 11;
y = []

jeu = [[map[0], map[1], map[1], map[1], map[1], map[1], map[1], map[1], map[1], map[1], map[1], map[2]],  //on définit l'emplacement de base pour chaque élément du jeu 
[map[1], map[1], map[1], map[1], map[1], map[1], map[1], map[1], map[1], map[1], map[1], map[2]]];  

function aff(){
    //on affiche la map complete 
    console.log(jeu[0][0],jeu[0][1],jeu[0][2],jeu[0][3],jeu[0][4],jeu[0][5],jeu[0][6],jeu[0][7],jeu[0][8],jeu[0][9],jeu[0][10],jeu[0][11]); 
    console.log(jeu[1][0],jeu[1][1],jeu[1][2],jeu[1][3],jeu[1][4],jeu[1][5],jeu[1][6],jeu[1][7],jeu[1][8],jeu[1][9],jeu[1][10],jeu[1][11]);
}

function deplacementB(index){
    //coorespond au déplacement de notre avion du haut vers le bas, on se déplace entre les deux tableaux de aff()
    if (index <= 2) {
        y = jeu[index][0]
        jeu[index][0] = jeu[index+1][0]
        jeu[index+1][0] = y
    }else {
        return
    }
}

function deplacementH(index){
    //coorespond au déplacement de notre avion du bas vers le haut, on se déplace entre les deux tableaux de aff()
    if (index <= 2) {
        y = jeu[index][0]
        jeu[index][0] = jeu[index-1][0]
        jeu[index-1][0] = y
    }else {
        return
    }
}

function resolve() {
    //cette fonction a pour but de définir un temps donné avant l'appel de la fonction asynxCall1 - qui permetde donner ce coté "animé"
    return new Promise(resolve => {
      setTimeout(() => {
        resolve (asyncCall1());
      }, 1000);
    });
    
    }

function resolve1() {
    //cette fonction a pour but de définir un temps donné avant l'appel de la fonction asynxCall - qui permetde donner ce coté "animé"
    return new Promise(resolve => {
      setTimeout(() => {
        resolve (asyncCall());
      }, 1000);
    });
    
    }

async function asyncCall() {
    //cette fonction est récursive et permet de faire tourner notre petite animation en boucle
    console.clear();  //on clear la console pour 
    aff();  //on affiche nos éléments pour mettre à jour notre affichage après le déplacement d'un des éléments du tableau aff()
    deplacementB(0);
    const result = await resolve();
  }

async function asyncCall1() {
    console.clear();
    aff();
    deplacementH(1);
    const result = await resolve1();
  }

function deplacementM(i){
    if (i >= 2) {
        y = jeu[0][i];
        jeu[0][i] = jeu[0][i - 1];
        jeu[0][i - 1] = y;
        return i -= 1;
    }else {
        i = 11;
        y = jeu[0][i];
        jeu[0][i] = jeu[0][1];
        jeu[0][1] = y;
        return i;
    }
}

function resolveM(i) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("index : ", i);
        resolve(asyncCallM(i));
        }, 1000);
    });
}
      
async function asyncCallM(i) {
    console.clear();
    aff();
    const nextIndex = deplacementM(i);
    const resulte = await resolveM(nextIndex);
}


function deplacementM1(id){
    // dans ce cas celle-ci à pour but de faire en sorte que nos "missiles" fasses un roulement dans aff(), 
    // en effet il ég=changent leur possiton avec l'index > que eux et se déplacent ainsi, une fois arrivé au même niveau il reveinne à leur position initiale
    if (id >= 2) {
        x = jeu[1][id];
        jeu[1][id] = jeu[1][id - 1];
        jeu[1][id - 1] = x;
        return id -= 1;
    }else {
        id = 11;
        x = jeu[1][id];
        jeu[1][id] = jeu[1][1];
        jeu[1][1] = x;
        return id;
    }
}

function resolveM1(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("index : ", id);
        resolve(asyncCallM1(id));
        }, 1000);
    });
}
      
async function asyncCallM1(id) {
    console.clear();
    aff();
    const nextIndex = deplacementM1(id);
    const resulte = await resolveM1(nextIndex);
}

asyncCallM(i); 
asyncCall();
resolveM1(id)

