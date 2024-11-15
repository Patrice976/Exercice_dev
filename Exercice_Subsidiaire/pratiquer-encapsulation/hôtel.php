<?php

class Chambre
{
    public  int $nb_personne;
    public array $linges = [ //tableau pour compter le nombre de linge présent dans la chambre 
        'Peignoir' => 0,
        'Serviette' => 0,
        'Drap' => 0,
    ];

    public function __construct(int $nb_personne)
    {
        $this->nb_personne = $nb_personne;
    }

    public function addLinge($typeof) // fonction permettant de rajouter du linge dans la chambre 
    // créer une istace de typeof 

    {
        if (!array_key_exists($typeof, $this->linges)) { //vérifie la validité de paramettre passé dans la fonction 
            echo "On ne met pas de $typeof dans une chambre d'hotel voyons !! \n";
            return;
        }

        if ($this->linges[$typeof] >= $this->nb_personne) { // termine la fonction si le nombre de linge est atteint 
            echo "Il y a suffisament $typeof dans cette chambre";
            return;
        } else {
            if ($this->linges[$typeof] >= 1) { //gestion du pluriel dans le retour de la fonction 
                $this->linges[$typeof]++;
                echo "il y a " . $this->linges[$typeof] . " " . $typeof . "s " . "dans la chambre. \n";
            } else {
                $this->linges[$typeof]++;
                echo "il y a " . $this->linges[$typeof] . " " . $typeof . " " . "dans la chambre. \n";
            }
        }
    }
}

abstract class linge {};

class Peignoir extends linge {};
class Serviette extends linge {};
class Draps extends linge {};

$room1408 = new Chambre(3);

$room1408->addLinge('Drap');
$room1408->addLinge('Drap');
$room1408->addLinge('Drap');
$room1408->addLinge('Drap');
