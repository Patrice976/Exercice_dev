<?php

class vaisseau
{
    public string $name;
    public int $taille;
    public function __construct(string $name, int $taille)
    {
        $this->name = $name;
        $this->taille = $taille;
    }
}

class Croiseur extends vaisseau
{
    public int $capacity;

    public function __construct(int $numb)
    {
        $this->capacity = $numb;
    }

    public function embarquer() {}

    public function débarquer() {}
}

class intercepteur extends vaisseau
{
    public int $canon;

    public function __construct(int $numb)
    {
        $this->canon = $numb;
    }
}



//intercepteur tirer / recharger 
// croiseur embarquer / débarquer 