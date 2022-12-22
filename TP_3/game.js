

let map = ['✈',' ','◅'];



jeu = [[map[0], map[1], map[1], map[1], map[1], map[2]],
[map[1], map[1], map[1], map[1], map[1], map[2]]];

function aff(){
    console.log(jeu[0][0],jeu[0][1],jeu[0][2],jeu[0][3],jeu[0][4],jeu[0][5]);
    console.log(jeu[1][0],jeu[1][1],jeu[1][2],jeu[1][3],jeu[1][4],jeu[1][5]);
}

y = []

function deplacementB(index){
    if (index <= 2) {
        y = jeu[index][0]
        jeu[index][0] = jeu[index+1][0]
        jeu[index+1][0] = y
    }else {
        return
    }
}

function deplacementH(index){
    if (index <= 2) {
        y = jeu[index][0]
        jeu[index][0] = jeu[index-1][0]
        jeu[index-1][0] = y
    }else {
        return
    }
}

function resolve() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve (asyncCall1());
      }, 1000);
    });
    
  }

function resolve1() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve (asyncCall());
      }, 1000);
    });
    
    }

async function asyncCall() {
    console.clear();
    aff();
    deplacementB(0);
    const result = await resolve();
    console.log(result);
    // expected output: "resolved"
  }

async function asyncCall1() {
    console.clear();
    aff();
    deplacementH(1);
    const result = await resolve1();
    console.log(result);
    // expected output: "resolved"
  }

asyncCall();






