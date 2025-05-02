<?php

class User {
    private string $identification;
    private string $firstName;
    private string $lastName;
    private float $weight;
    private float $height;
    private Plan $plan;

    public function __construct(string $identification, string $firstName, string $lastName, float $weight, float $height, Plan $plan) {
        $this->identification = $identification;
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->weight = $weight;
        $this->height = $height;
        $this->plan = $plan;
    }

    public function getPlan(): Plan {
        return $this->plan;
    }

    public function showInformation(): void {
        echo "ID: " . $this->identification . "\n";
        echo "<br/>";
        echo "First Name: " . $this->firstName . "\n";
        echo "<br/>";
        echo "Last Name: " . $this->lastName . "\n";
        echo "<br/>";
        echo "Weight: " . $this->weight . "\n";
        echo "<br/>";
        echo "Height: " . $this->height . "\n";
        echo "<br/>";
        echo "Plan: " . $this->plan->getName() . "\n";
        echo "<br/>";
        echo "Price: $" . $this->plan->getPrice() . "\n";
        echo "<br/>";
        echo "Services: " . $this->plan->getServices() . "\n";
    }
}

abstract class Plan {
    protected string $name;
    protected float $price;
    protected string $services;

    public function __construct(string $name, float $price, string $services) {
        $this->name = $name;
        $this->price = $price;
        $this->services = $services;
    }

    public function getName(): string {
        return $this->name;
    }

    public function getPrice(): float {
        return $this->price;
    }

    public function getServices(): string {
        return $this->services;
    }
}

class Basic extends Plan {
    public function __construct() {
        parent::__construct("Basic", 75, "General access");
    }
}

class Medium extends Plan {
    public function __construct() {
        parent::__construct("Medium", 115, "General access, directed classes");
    }
}

class Premium extends Plan {
    public function __construct() {
        parent::__construct("Premium", 150, "General access, directed classes, personal trainer and wetland area");
    }
}


$basicPlan = new Basic();
$mediumPlan = new Medium();
$premiumPlan = new Premium();

$user = new User("1075228306", "laura vanessa", "perez perdomo", 60, 1.57, $premiumPlan);


$user->showInformation();



?>
