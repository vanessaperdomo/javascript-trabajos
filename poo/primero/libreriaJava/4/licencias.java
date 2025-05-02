public class licencias {
    public static void main(String[] args) {
        Licencia licenciaSeleccionada = new LicenciaB(); // Puedes cambiar a LicenciaA o LicenciaC

        Estudiante estudiante = new Estudiante(
                "1075228306",
                "Laura Vanessa",
                "Pérez Perdomo",
                "Carrera 10 #20-30",
                "3123456789",
                "O+",
                licenciaSeleccionada
        );

        estudiante.mostrarInformacion();
    }
}

// Clase abstracta Licencia
abstract class Licencia {
    protected String tipo;
    protected double costo;
    protected int duracion; // en meses

    public Licencia(String tipo, double costo, int duracion) {
        this.tipo = tipo;
        this.costo = costo;
        this.duracion = duracion;
    }

    public String getTipo() {
        return tipo;
    }

    public double getCosto() {
        return costo;
    }

    public int getDuracion() {
        return duracion;
    }
}

// Subclases concretas de Licencia
class LicenciaA extends Licencia {
    public LicenciaA() {
        super("Licencia A - Motocicletas", 500_000, 6);
    }
}

class LicenciaB extends Licencia {
    public LicenciaB() {
        super("Licencia B - Vehículos Particulares", 800_000, 8);
    }
}

class LicenciaC extends Licencia {
    public LicenciaC() {
        super("Licencia C - Servicio Público", 1_000_000, 10);
    }
}

// Clase Estudiante
class Estudiante {
    private String identificacion;
    private String nombres;
    private String apellidos;
    private String direccion;
    private String telefono;
    private String rh;
    private Licencia licencia;

    public Estudiante(String identificacion, String nombres, String apellidos,
                      String direccion, String telefono, String rh, Licencia licencia) {
        this.identificacion = identificacion;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.direccion = direccion;
        this.telefono = telefono;
        this.rh = rh;
        this.licencia = licencia;
    }

    public double calcularValorPagar() {
        return licencia.getCosto();
    }

    public void mostrarInformacion() {
        System.out.println("Identificación: " + identificacion);
        System.out.println("Nombres: " + nombres);
        System.out.println("Apellidos: " + apellidos);
        System.out.println("Dirección: " + direccion);
        System.out.println("Teléfono: " + telefono);
        System.out.println("RH: " + rh);
        System.out.println("Tipo de Licencia: " + licencia.getTipo());
        System.out.printf("Costo: $%,.0f%n", calcularValorPagar());
        System.out.println("Duración: " + licencia.getDuracion() + " meses");
    }
}
