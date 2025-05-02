<?php

abstract class NewtonLaw {
    protected $name;

    public function __construct($name) {
        $this->name = $name;
    }
   
    abstract public function explain();
    abstract public function calculate();
}

class FirstLaw extends NewtonLaw {
    private $force;

    public function __construct($force) {
        parent::__construct("First Law of Newton");
        $this->force = $force;
    }

    public function explain() {
        return "An object at rest or in uniform straight-line motion will remain in this state unless acted upon by an external force.";
    }

    public function calculate() {
        if ($this->force == 0) {
            return "The force is 0. The object maintains its state (rest or constant motion).";
        } else {
            return "There is a force acting. The object changes its state.";
        }
    }
}

class SecondLaw extends NewtonLaw {
    private $mass;
    private $acceleration;

    public function __construct($mass, $acceleration) {
        parent::__construct("Second Law of Newton");
        $this->mass = $mass;
        $this->acceleration = $acceleration;
    }

    public function explain() {
        return "The net force acting on an object is equal to the mass times its acceleration (F = m * a).";
    }

    public function calculate() {
        $force = $this->mass * $this->acceleration;
        return "The force is: {$force} N";
    }
}

class ThirdLaw extends NewtonLaw {
    private $force;

    public function __construct($force) {
        parent::__construct("Third Law of Newton");
        $this->force = $force;
    }

    public function explain() {
        return "For every action, there is an equal and opposite reaction.";
    }

    public function calculate() {
        return "If a force of {$this->force} N is applied, the reaction will be -" . $this->force . " N.";
    }
}


$selectedLaw = "first"; 
$force = 0;
$mass = 10;
$acceleration = 3;

echo "<h3>Newton's Law Simulator</h3>";

if ($selectedLaw == "first") {
    $law = new FirstLaw($force);
    echo "<strong>" . $law->explain() . "</strong><br>";
    echo $law->calculate();
} elseif ($selectedLaw == "second") {
    $law = new SecondLaw($mass, $acceleration);
    echo "<strong>" . $law->explain() . "</strong><br>";
    echo $law->calculate();
} elseif ($selectedLaw == "third") {
    $law = new ThirdLaw(50);
    echo "<strong>" . $law->explain() . "</strong><br>";
    echo $law->calculate();
} else {
    echo "The entered law is not valid. Use: first, second, or third.";
}
?>
