class Coronavirus { // motherclass Coronavius 
    constructor(type) {
        this.codename = type // constructeur qui comprend le nom de code des virus 
}

affiche() { //création de la méthode pour afficher les noms de code 
    console.log ('Nom de code : ' + this.codename) 
}
}

// liste des classes filles de Coronavirus 

class Alpha extends Coronavirus {}
class Beta extends Coronavirus {}
class Gamma extends Coronavirus {}
class Omicron extends Coronavirus {}
class Delta extends Coronavirus {}

let coronavirusList = []; //array dans laquelle serons injecté nos différentes instences 


        coronavirusList.push(new Alpha("B.1.1.7"))
        coronavirusList.push(new Beta("B.1.351"))
        coronavirusList.push(new Gamma("P.1"))
        coronavirusList.push(new Omicron("B.1.1.529"))
        coronavirusList.push(new Gamma("P.1"))
        coronavirusList.push(new Delta("B.1.617.2"))
        coronavirusList.push(new Omicron("B.1.1.529"))
        coronavirusList.push(new Alpha("B.1.1.7"))
        coronavirusList.push(new Omicron("B.1.1.529"))

        coronavirusList.forEach ((element) => { // boucle pour afficher tout les éléments du tableau coronavirusListe avec la méthode implémenté dans la motherclass
            element.affiche();
        })
        
