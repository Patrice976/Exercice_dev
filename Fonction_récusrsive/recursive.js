const dossierPrincipal = {
  nom: 'Ada',
  contenu: [{
      nom: 'Projets collectifs Ada',
      contenu: [{
          nom: 'Pico8',
          contenu: [{
            nom: 'mariokart.p8'
          }]
        },
        {
          nom: 'Dataviz',
          contenu: [{
              nom: 'index.html'
            },
            {
              nom: 'script.js'
            }
          ]
        }
      ]
    },
    {nom: 'CV.pdf'},
    {
      nom: 'Projets persos',
      contenu: [{
        nom: 'Portfolio',
        contenu: [{
            nom: 'index.html'
          },
          {
            nom: 'script.js'
          }
        ]
      }]
    },
  ],
}

function afficherDossier(dossier) { 
    console.log("afficher Dossier (dossierPrincipale)")
    console.log(dossier.nom)
    
 }


function afficherDossierIteratif(dossier) {
    // Affiche moi chaque élément qu'il y a dans le dossier ADA 
    console.log("afficher Dossier (dossierPrincipale)")
    console.log(dossier.nom)
 for (let index = 0; index < dossier.contenu.length; index++) {
    const doc = dossier.contenu[index];
    console.log(doc)
}}


function afficherDossierRecursif(doc) {
    //Affiche moi les éléments du paramètre
    // regarde si tu peux afficher les élément à l'intérieur des éléments du paramètre
   
    for (let index = 0; index < doc.contenu.length; index++) {
            let child = doc.contenu[index];
            console.log(child)
        if (Object.hasOwn(child,'contenu') == true) {
            afficherDossierRecursif(child)
        }
            
    }
}
    


afficherDossierRecursif(dossierPrincipal)

// Dans le dossier parent parcours les éléments enfants 
// Si un élément enfant est un dossier parcours le 