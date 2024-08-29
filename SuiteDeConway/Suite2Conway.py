def checkIfSame (array,index,result) : 
    groupe = [array[index]] #Ajoute l'index élément dans un tabeau groupe
    while index + 1 < len(array) and array[index] == array[index+1] : #tant que mon index incrémenté est plus petit que la longueur de ma liste & que le index item est le même que les index+1 item 
        groupe.append(array[index+1]) # Ajoute l'index+1 élément dans mon tableau groupe
        index = index + 1
    
    stack = ''.join(groupe) #transforme tout les éléments groupé en chaine de caractère 
    result.append(stack) #ajoute la chaine groupé au résultat 
    return index #Indique à la boucle principale l'état d'avancement de l'index 
            

def decoupeChaine (string) :
    i=0
    result = []
    cutted = list(string) #transforme ma chaine de caractère en tableau (liste pour les puriste de python)
    while i < len(cutted)  : #Tant que i ne dépasse pas la longueur de mon tableau  
        i = checkIfSame(cutted,i,result) #Appel checkIfSame avec le bon index 
        i = i+1
    return result 

def decritChaine(string) :
    #renvoie une string qui décrit, les caractères qui constituent la chaîne en paramètre
    result =[]
    array = decoupeChaine(string) #Prend mon nouveau tableau
    i=0

    while i< len(array) : #Parcour le tableau 
        number = str(len(array[i]))#compte le nombre d'élément de chaque item 
        result.append(number)#inject le résultat dans le résulta 
        tableletter = list(array[i])
        letter = tableletter[0]#découpe le premier élément en un tableau # récupére le premier résultat 
        result.append(letter)#injecte le dans le nouveau tableau 
        i += 1 
    
    answer = ''.join(result) #transforme le nouveau tableau en une chaine de caractères ''.join()
    return answer 

def suiteConway(carac,n) :
    countingTool = 1
    print(carac)
    while countingTool < n :
        carac=decritChaine(carac)
        print(carac)
        countingTool += 1   



suiteConway('a',6)




