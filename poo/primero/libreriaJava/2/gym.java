public class gym {
    public static void main(String[] args) {
        Plan premiumPlan = new Premium();
        User user = new User("1075228306", "Laura Vanessa", "Perez Perdomo", 60, 1.57, premiumPlan);
        user.showInformation();
    }
}

// Clase abstracta Plan
abstract class Plan {
    protected String name;
    protected double price;
    protected String services;

    public Plan(String name, double price, String services) {
        this.name = name;
        this.price = price;
        this.services = services;
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public String getServices() {
        return services;
    }
}

// Clases que extienden Plan
class Basic extends Plan {
    public Basic() {
        super("Basic", 75, "General access");
    }
}

class Medium extends Plan {
    public Medium() {
        super("Medium", 115, "General access, directed classes");
    }
}

class Premium extends Plan {
    public Premium() {
        super("Premium", 150, "General access, directed classes, personal trainer and wetland area");
    }
}

// Clase User
class User {
    private String identification;
    private String firstName;
    private String lastName;
    private double weight;
    private double height;
    private Plan plan;

    public User(String identification, String firstName, String lastName, double weight, double height, Plan plan) {
        this.identification = identification;
        this.firstName = firstName;
        this.lastName = lastName;
        this.weight = weight;
        this.height = height;
        this.plan = plan;
    }

    public Plan getPlan() {
        return plan;
    }

    public void showInformation() {
        System.out.println("ID: " + identification);
        System.out.println("First Name: " + firstName);
        System.out.println("Last Name: " + lastName);
        System.out.println("Weight: " + weight);
        System.out.println("Height: " + height);
        System.out.println("Plan: " + plan.getName());
        System.out.println("Price: $" + plan.getPrice());
        System.out.println("Services: " + plan.getServices());
    }
}
