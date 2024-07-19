allumettes = 50

nbrPlayer=window.prompt("Combien de joueurs participents ? ",)
let participant = []

for (let index = 0; index < nbrPlayer; index++) {
    participant.push('joueur'+parseInt(index+1))   
}

console.log(participant)

function gameTime(array){
do {
    for (let index = 0; index < array.length; index++) {
        let joueur = array[index];
    
        clientChoice = window.prompt(array[index]+" : Combien d'allumettes souhaites tu retirer ?",)
        
        if (clientChoice > 6) {
                clientChoice=window.prompt("Choisissez une valeur comprise entre 1 et 6 ",)
              }
              else {
       
                      allumettes = allumettes-clientChoice
                      document.getElementById("info").innerHTML='Il reste '+' '+allumettes+' allumettes'
           
              }

        if (allumettes <= 0 ) {
                document.getElementById("info").innerHTML='VICTOIRE '+array[index] 
                return
        }
        
        console.log (array[index], allumettes)
       
        if (index == array.length) {
            index = 0 
        }
    }

} while(allumettes >= 0)  }

let Button = document.querySelector('button')
Button.addEventListener('click',()=>gameTime(participant))