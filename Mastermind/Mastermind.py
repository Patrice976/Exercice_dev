# combinaison à deviné imposé : 2 pion 2 couleurs différentes 
# 12 essais pour trouver la bonne combinaison 
# 4 choix de couleur possible 
# 3 fonction min : 
    #Vérifier que la proposition est composé des 4 couleurs possible 
    # Une fonctione qui retourne true or false si la combinaison est trouvé ou non 
    # Une fonction qui gère la partie (continuer tant que/fin si gagné )

answer = ["rouge","bleu","vert","jaune"]
tentative = 0



# Fonction pour vérifier que la proposition est composé des 4 couleur possible 
def colorCheck(code) : 
    for x in code :
        if (x != 'bleu') and (x !='rouge') and (x !='jaune') and (x !='vert') and (x !="violet") and (x != "noir") and (x != "blanc") and (x != "rose") :
            return False
    return True 

#Vérifie si la combinaise est trouvé ou non 
def goodCombinaison(proposition) :
    if colorCheck(proposition) == False :
        print ("couleur a disposition : bleu, rouge, jaune , vert, violet, noir , blanc, rose  ")

def playerPrupose() : 
    guess = []
    #demander au joueur de faire sa proposition 
    col1 = input('couleur 1: ')
    col2 = input('couleur 2: ')
    col3 = input('couleur 3: ')
    col4= input ('couleur 4: ')
    #injecter les réponses dans le tableau guess 
    guess.append(col1)
    guess.append(col2)
    guess.append(col3)
    guess.append(col4)
    return guess

def codeBreaker(code) :
   
   #retourne le tableau guess
    guess=playerPrupose()
    #retoune True si on a gagner 
    win= checkWin(code,guess) 
    if win == True :
        return True 

    #créer un tableau vide clue
    clue=[0,0]  

    #comparer le tableau guess et answer 
        #boucle 1 : si guess[0] == answer[0] +1 en clue[0]
        #           return clue[0]
    index = 0 
    while index < len(guess): 
         
         for i in range(len(code)) :
            if guess[index] == code[i] :
             clue[0] += 1
         index = index + 1 
             
    
        #boucle 2 : pour chaque élément présent dans guess et answer +1 en clue[1]
    i = 0
    while i<len(guess) : 
        if guess[i] == code[i] :
            clue[1] +=1
            clue[0] -=1
            i += 1
        else :
            i+=1
    print(clue)
    
    

def checkWin(code,guess) :
     # si le code est le même que ce que propose le joueur alors on a gagné   
     if code == guess :
        print('Félicitation tu as gagné')
        return True 
     else : 
         return False
        
     
    # sinon relance un autre tour 

       
    
def game(code) : 
    tentative =0 
    while tentative < 12 :
        end = codeBreaker(code)
        if end == True : 
            return 
        else : 
            chance = 12 - tentative 
            print(f'il te reste {chance} essais')
            codeBreaker(code)
            tentative = tentative + 1 
            print(tentative)
    print('Tu as perdu ')
    
#logique 2
    #Créer une variable try = 0 
    # Tant que try n'est pas = 12 try +1 si on sort du tant que print('Perdu')
       




game(answer)



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

    