console.log("hi mate");

//Variables


let buttons = document.querySelectorAll(".btn"); // cibler les bouton
let del = document.querySelector(".all-clear")
let screen = document.querySelector(".calculator-screen")//cible la div qui affiche les calcules

//Fonction

//affiche les valerurs à l'écran
function displayValue(button) { 
    inputvalue = button.value; //stock la valeur du bouton
    screen.value += inputvalue; //injecte la valeur du bouton dans le screen (cumulable possible)

}

//supprime ce qu'il y a sur l'écrant
function deleteAll() {
    screen.value = '';
}





//Appel

//on injecte dans les boutons la fonction displayValue pour afficher sur l'écrant les valeurs des boutons
buttons.forEach((button) => { //On parcour l'enssemble de la liste de nos boutton 
    button.addEventListener("click", () => { //on leur ajout un évent au click
        displayValue(button); //affiche les valeurs sur l'écrant
      });
})

//ajout de l'evenement de suppression sur le boutton del
del.addEventListener("click", () => {
    deleteAll()
})




//Cibler les boutons

//Quand tu appuis sur un bouton

// Ajoute sa valeur dans la div qui affiche les résultats
