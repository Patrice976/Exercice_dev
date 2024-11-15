<?php

class Chambre
{
    public int $nb_personne;
    public array $linge = [];
    public int $compteur;

    public function __construct(int $nb_personne)
    {
        $this->nb_personne = $nb_personne;
    }

    public function addLinge(Linge $lingeType)
    {
        // Ajouter le type de linge au tableau
        $this->linge[] = $lingeType->getType();
        // Compter les occurrences de chaque type de linge
        $compteur = array_count_values($this->linge);

        // Vérifier si le nombre d'objets de ce type a atteint le nombre de personnes
        if ($compteur[$lingeType->getType()] === $this->nb_personne) {
            echo "Il y a suffisamment de {$lingeType->getType()} dans la chambre.\n";
            return;
        }

        // Affichage pour vérifier l'ajout
        echo "Ajout d'un(e) {$lingeType->getType()} dans la chambre.\n";
    }
}

abstract class Linge
{
    protected string $type;

    public function getType(): string
    {
        return $this->type;
    }
}

class Peignoir extends Linge
{
    public function __construct()
    {
        $this->type = 'Peignoir';
    }
}

class Serviette extends Linge
{
    public function __construct()
    {
        $this->type = 'Serviette';
    }
}

class Draps extends Linge
{
    public function __construct()
    {
        $this->type = 'Draps';
    }
}

// Exemple d'utilisation
$room1408 = new Chambre(3);
$room1408->addLinge(new Draps());
$room1408->addLinge(new Draps());
$room1408->addLinge(new Draps());
$room1408->addLinge(new Draps());
