class Date :
    def __init__(self, jour, mois, année): 
        if jour > 31 :
            raise ValueError("le jour n'est pas valide")
        else :
             self.jour = jour
    
        if mois > 12 :
            raise ValueError("le mois n'est pas valide")
        else : 
            self.mois = mois 

        if année < 0 :
            raise ValueError("le mois n'est pas valide")
        else :    
            self.année = année 
    
    def __repr__(self):
        return 

