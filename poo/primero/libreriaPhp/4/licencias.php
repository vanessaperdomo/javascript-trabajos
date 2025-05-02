<?php

abstract class Licencia {
    protected string $tipo;
    protected float $costo;
    protected int $duracion; 

    public function __construct(string $tipo, float $costo, int $duracion) {
        $this->tipo = $tipo;
        $this->costo = $costo;
        $this->duracion = $duracion;
    }

    public function getTipo(): string {
        return $this->tipo;
    }

    public function getCosto(): float {
        return $this->costo;
    }

    public function getDuracion(): int {
        return $this->duracion;
    }
}


class LicenciaA extends Licencia {
    public function __construct() {
        parent::__construct("Licencia A - Motocicletas", 500000, 6);
    }
}

class LicenciaB extends Licencia {
    public function __construct() {
        parent::__construct("Licencia B - Vehículos Particulares", 800000, 8);
    }
}

class LicenciaC extends Licencia {
    public function __construct() {
        parent::__construct("Licencia C - Servicio Público", 1000000, 10);
    }
}

class Estudiante {
    private string $identificacion;
    private string $nombres;
    private string $apellidos;
    private string $direccion;
    private string $telefono;
    private string $rh;
    private Licencia $licencia;

    public function __construct(
        string $identificacion,
        string $nombres,
        string $apellidos,
        string $direccion,
        string $telefono,
        string $rh,
        Licencia $licencia
    ) {
        $this->identificacion = $identificacion;
        $this->nombres = $nombres;
        $this->apellidos = $apellidos;
        $this->direccion = $direccion;
        $this->telefono = $telefono;
        $this->rh = $rh;
        $this->licencia = $licencia;
    }

    public function calcularValorPagar(): float {
        return $this->licencia->getCosto();
    }

    public function mostrarInformacion(): void {
        echo "Identificación: " . $this->identificacion . "<br/>";
        echo "Nombres: " . $this->nombres . "<br/>";
        echo "Apellidos: " . $this->apellidos . "<br/>";
        echo "Dirección: " . $this->direccion . "<br/>";
        echo "Teléfono: " . $this->telefono . "<br/>";
        echo "RH: " . $this->rh . "<br/>";
        echo "Tipo de Licencia: " . $this->licencia->getTipo() . "<br/>";
        echo "Costo: $" . number_format($this->calcularValorPagar(), 0, ',', '.') . "<br/>";
        echo "Duración: " . $this->licencia->getDuracion() . " meses<br/>";
    }
}


$licenciaSeleccionada = new LicenciaB(); 

$estudiante = new Estudiante(
    "1075228306",
    "Laura Vanessa",
    "Pérez Perdomo",
    "Carrera 10 #20-30",
    "3123456789",
    "O+",
    $licenciaSeleccionada
);


$estudiante->mostrarInformacion();

?>
