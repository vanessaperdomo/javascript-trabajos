public class newton {
    public static void main(String[] args) {
        String selectedLaw = "first"; // Puede ser "first", "second" o "third"
        double force = 0;
        double mass = 10;
        double acceleration = 3;

        System.out.println("=== Newton's Law Simulator ===");

        NewtonLaw law;

        switch (selectedLaw.toLowerCase()) {
            case "first":
                law = new FirstLaw(force);
                break;
            case "second":
                law = new SecondLaw(mass, acceleration);
                break;
            case "third":
                law = new ThirdLaw(50);
                break;
            default:
                System.out.println("The entered law is not valid. Use: first, second, or third.");
                return;
        }

        System.out.println("\nExplanation: " + law.explain());
        System.out.println("Calculation: " + law.calculate());
    }
}

// Clase abstracta base
abstract class NewtonLaw {
    protected String name;

    public NewtonLaw(String name) {
        this.name = name;
    }

    public abstract String explain();
    public abstract String calculate();
}

// Primera Ley de Newton
class FirstLaw extends NewtonLaw {
    private double force;

    public FirstLaw(double force) {
        super("First Law of Newton");
        this.force = force;
    }

    @Override
    public String explain() {
        return "An object at rest or in uniform straight-line motion will remain in this state unless acted upon by an external force.";
    }

    @Override
    public String calculate() {
        if (force == 0) {
            return "The force is 0. The object maintains its state (rest or constant motion).";
        } else {
            return "There is a force acting. The object changes its state.";
        }
    }
}

// Segunda Ley de Newton
class SecondLaw extends NewtonLaw {
    private double mass;
    private double acceleration;

    public SecondLaw(double mass, double acceleration) {
        super("Second Law of Newton");
        this.mass = mass;
        this.acceleration = acceleration;
    }

    @Override
    public String explain() {
        return "The net force acting on an object is equal to the mass times its acceleration (F = m * a).";
    }

    @Override
    public String calculate() {
        double force = mass * acceleration;
        return "The force is: " + force + " N";
    }
}

// Tercera Ley de Newton
class ThirdLaw extends NewtonLaw {
    private double force;

    public ThirdLaw(double force) {
        super("Third Law of Newton");
        this.force = force;
    }

    @Override
    public String explain() {
        return "For every action, there is an equal and opposite reaction.";
    }

    @Override
    public String calculate() {
        return "If a force of " + force + " N is applied, the reaction will be -" + force + " N.";
    }
}
