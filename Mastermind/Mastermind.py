# combinaison à deviné imposé : 2 pion 2 couleurs différentes 
# 12 essais pour trouver la bonne combinaison 
# 4 choix de couleur possible 
# 3 fonction min : 
    #Vérifier que la proposition est composé des 4 couleurs possible 
    # Une fonctione qui retourne true or false si la combinaison est trouvé ou non 
    # Une fonction qui gère la partie (continuer tant que/fin si gagné )

combinaison = ["rouge","bleu"]

# Fonction pour vérifier que la proposition est composé des 4 couleur possible 
def colorCheck(answer) : 
    for x in answer :
        if (x != 'bleu') and (x !='rouge') and (x !='jaune') and (x !='vert') :
            return False
    return True 

#Vérifie si la combinaise est trouvé ou non 
def goodCombinaison(proposition) :
    if colorCheck(proposition) == True :
        print("bravo tu as gagné")
    else : 
        print("essai encore")

def game() : 
    



colorCheck(combinaison)
print (colorCheck(combinaison))




#NB : Python 
    # Afficher : print("mon txte")
    # Array/liste : nomDeLaListe=["élément1","élément2","élément3"]
    # Boucle : while i<8 :
#                   action
#                   i +=1
#            for x in liste :
#                   action 
#                               x semble agir comme un incrémentateur automatique pas besoin d'indiquer d'incrémentation ou de déclarer x    
    # Condition : if b>a : 
#                    action 
#                 else :
#                    action 
    # Fonction : def nomDeFonction() :
#                               action 
    # Appeler une fonction : nomDeFonction()
    # Objet/class : class nomObjet : 
#                       def _init_(self,info1,info2):
#                           self.nom = nom 
#                           self.age = age
#                        exemple emploi varObj = nomObjet(lui,8) 
#                                               print (varObj.info1) / print (varObj.info2)
#                                               -- renvoi --  lui / 8
    # Variable : variable = valeur 

    