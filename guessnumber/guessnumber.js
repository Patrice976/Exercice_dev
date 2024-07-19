// Création fonction pour demander un nombre à l'utilisateur 
function prompt_number() {
   let givenNumber=prompt("Donne moi un nombre",);
   return givenNumber
}

function txt_nbr (y) {
    if (y<22) {document.getElementById("p").innerHTML="c'est plus"
    }
    else if (y>22) {document.getElementById("p").innerHTML="c'est moins"}
    else {document.getElementById("p").innerHTML="Bravo! Tu as gagné"}}

function didIwin(numb) {{
   if (numb==22)
    {return true}
    else 
    {return false}}
     }

function gamePlay () {
    let givenNumber= prompt_number()
    let win= didIwin(givenNumber)
    txt_nbr(givenNumber)
    return win }

 while (gamePlay()==false) 
 {console.log("bravo)")} 

