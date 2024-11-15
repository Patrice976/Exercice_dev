<?php

class Chambre
{
    public  int $nb_personne;
    public array $linge = [];
    public int $compteur;



    public function __construct(int $nb_personne)
    {
        $this->nb_personne = $nb_personne;
    }

    public function addLinge(Linge $lingeType)
    { // fonction permettant de rajouter du linge dans la chambre 
        $compteur = array_count_values($this->linge); //count value ne fonctionne par sur des objets // Strategie : récupérer le string de ma classe et compter ses itération dans le tableau 


        if ($compteur[$lingeType->getType()] == $this->nb_personne) {
            echo ("il y a suffisament de {$lingeType->getType()} dans la chambre \n");
            return;
        } else {
            $this->linge[] = $lingeType->getType();
            echo ("ajout du linge {$lingeType->getType()} dans la chambre \n");
        }
    }
}

abstract class Linge
{
    protected string $type;

    function getType()
    {
        return $this->type;
    }
};

class Peignoir extends Linge
{
    function __construct()
    {

        $this->type = 'Peignoir';
    }
};

class Serviette extends Linge
{
    public function __construct()
    {

        $this->type = 'Serviette';
    }
};

class Draps extends Linge
{
    public function __construct()
    {

        $this->type = 'Draps';
    }
};

$room1408 = new Chambre(3);

$room1408->addLinge(new Draps);
$room1408->addLinge(new Draps);
$room1408->addLinge(new Draps);
$room1408->addLinge(new Draps);
