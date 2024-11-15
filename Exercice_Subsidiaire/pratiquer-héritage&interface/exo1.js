class Vaisseau{
    constructor(nom, type, taille){
      this.nom = nom;
      this.type =type;
      this.taille = taille;
    }
  }
  
  let vaisseau1 = new Vaisseau("V1", "proto", 0);
  
  console.log(vaisseau1.nom);
  
  class Interceptor extends Vaisseau{
    constructor(nom, taille, nb_canons){
      super(nom, "Interceptor", taille);
      this.nb_canons = nb_canons;
      this.ammo = this.nb_canons
     
    }

    shoot() {
        if (this.ammo > 0) {
          this.ammo -= 1;
        return "le tir est un succès"
        
        }
        else {
            return "les canons doivent être rechargés"
        }
    }
    reload() {
        if (this.ammo == this.nb_canon) {
            return "le canon est déjà chargé, faites feu !";
        }
        else {
        this.ammo = this.nb_canons;
        return "canon chargé !"
        }
    }
  }
  
  let Interceptor1 = new Interceptor("Int2", 0, 2);
  console.log(Interceptor1);
  
  class Cruiser extends Vaisseau {
    constructor(nom, taille, capacite){
      super(nom, "Cruiser", taille);
      this.capacite = capacite;
      this.pab = 0;
    }
  
    embarquer(nombre){
      if((this.pab + nombre)>this.capacite){
        return false;
      }
      else{
        this.pab += nombre;
        return true;
      }
    };
    debarquer(nombre){
      if((this.pab - nombre)< 0){
        return false;
      }
      else{
        this.pab -= nombre;
        return true;
      }
    };
  }
  
  let c1 = new Cruiser("Acclamator",752,700);
  console.log(c1.embarquer(200));
  console.log(c1.pab);
  console.log(c1.embarquer(500));
  console.log(c1.pab);
  console.log(c1.embarquer(20));
  console.log(c1.pab);
  console.log(c1.debarquer(700));
  console.log(c1.pab);
  console.log(c1.debarquer(20));
  console.log(c1.pab);

  let i2 = new Interceptor ("X-wing", 12.5, 2)
  console.log(i2)
  console.log(i2.shoot()) // ok
  console.log(i2.shoot()) //ok
  console.log(i2.shoot()) //erreur
  console.log(i2.reload()) //ok
  console.log(i2.reload()) //erreur 
  console.log(i2.shoot()) //ok 