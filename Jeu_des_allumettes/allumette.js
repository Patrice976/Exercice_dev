let allumettes = 50 




 function playerSuccetion() {
    
do 

{ clientChoice = window.prompt("Joueur 1 : Combien d'allumettes souhaites tu retirer ?",)
        
        if (clientChoice > 6) {
                clientChoice=window.prompt("Choisissez une valeur comprise entre 1 et 6 ",)
              }
              else {
       
                      allumettes = allumettes-clientChoice
                      document.getElementById("info").innerHTML='Il reste '+' '+allumettes+' allumettes'
           
              }

        if (allumettes <= 0 ) {
                document.getElementById("info").innerHTML='VICTOIRE joueur 1 '
                return
        }
        
        console.log ("joueur 1", allumettes)

clientChoice = window.prompt("Joueur 2 à toi !  : Combien d'allumettes souhaites tu retirer ?",)

        if (clientChoice > 6) {
                clientChoice=window.prompt("Choisissez une valeur comprise entre 1 et 6 ",)
              }
              else {
       
                      allumettes = allumettes-clientChoice
                      document.getElementById("info").innerHTML='Il reste '+' '+allumettes+' allumettes'
           
              }
        

        if (allumettes <= 0 ) {
                document.getElementById("info").innerHTML='VICTOIRE joueur 2'
                return
        }
       
        console.log('joueur 2', allumettes)
 }
while (allumettes >= 0)
 }

let Button = document.querySelector('button')
Button.addEventListener('click',()=>playerSuccetion(allumettes))