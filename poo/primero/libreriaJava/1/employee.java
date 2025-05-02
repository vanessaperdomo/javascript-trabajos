public class employee {
    public static void main(String[] args) {
        EmployeeSalary employeeSalary = new EmployeeSalary("Laura Vanessa", 2000000, 7, 4, 2);
        Subsidy subsidy = new Subsidy(1300000);
        OvertimePay overtimePay = new OvertimePay();
        Deductions deductions = new Deductions("medium");
        Salary salary = new Salary(employeeSalary, subsidy, overtimePay, deductions);

        System.out.println("Nombre: " + employeeSalary.getEmployeeName());
        System.out.println("Salario base: " + String.format("%,d", (int) employeeSalary.getBaseSalary()));
        System.out.println("Horas extras diurnas: " + employeeSalary.getDaytimeOvertimeHours());
        System.out.println("Horas extras nocturnas: " + employeeSalary.getNighttimeOvertimeHours());
        System.out.println("Horas extras festivas: " + employeeSalary.getHolidayOvertimeHours());
        System.out.println("Subsidio: " + String.format("%,d", (int) subsidy.calculateSubsidy(employeeSalary)));
        System.out.println("Pago horas extra: " + String.format("%,d", (int) overtimePay.calculateOvertimePay(employeeSalary)));
        System.out.println("Deducciones: " + String.format("%,d", (int) deductions.calculateDeductions(employeeSalary)));
        System.out.println("Salario total neto: " + String.format("%,d", (int) salary.calculateSalary()));
    }
}

class EmployeeSalary {
    private String employeeName;
    private double baseSalary;
    private int daytimeOvertimeHours;
    private int nighttimeOvertimeHours;
    private int holidayOvertimeHours;

    public EmployeeSalary(String employeeName, double baseSalary, int daytimeOvertimeHours, int nighttimeOvertimeHours, int holidayOvertimeHours) {
        this.employeeName = employeeName;
        this.baseSalary = baseSalary;
        this.daytimeOvertimeHours = daytimeOvertimeHours;
        this.nighttimeOvertimeHours = nighttimeOvertimeHours;
        this.holidayOvertimeHours = holidayOvertimeHours;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public double getBaseSalary() {
        return baseSalary;
    }

    public int getDaytimeOvertimeHours() {
        return daytimeOvertimeHours;
    }

    public int getNighttimeOvertimeHours() {
        return nighttimeOvertimeHours;
    }

    public int getHolidayOvertimeHours() {
        return holidayOvertimeHours;
    }
}

class Subsidy {
    private double minimumWage;

    public Subsidy(double minimumWage) {
        this.minimumWage = minimumWage;
    }

    public double calculateSubsidy(EmployeeSalary employeeSalary) {
        if (employeeSalary.getBaseSalary() < 2 * minimumWage) {
            return minimumWage;
        } else {
            return 0;
        }
    }
}

class OvertimePay {
    public double calculateOvertimePay(EmployeeSalary employeeSalary) {
        double base = employeeSalary.getBaseSalary() / 240;
        double daytimeRate = base * 1.25;
        double nighttimeRate = base * 1.75;
        double holidayRate = base * 2.0;

        double daytimePay = employeeSalary.getDaytimeOvertimeHours() * daytimeRate;
        double nighttimePay = employeeSalary.getNighttimeOvertimeHours() * nighttimeRate;
        double holidayPay = employeeSalary.getHolidayOvertimeHours() * holidayRate;

        return daytimePay + nighttimePay + holidayPay;
    }
}

class Deductions {
    private String arlRiskLevel;

    public Deductions(String arlRiskLevel) {
        this.arlRiskLevel = arlRiskLevel;
    }

    public double calculateDeductions(EmployeeSalary employeeSalary) {
        double salary = employeeSalary.getBaseSalary();
        double health = salary * 0.04;
        double pension = salary * 0.04;
        double arl = salary * getArlPercentage();

        return health + pension + arl;
    }

    private double getArlPercentage() {
        return switch (arlRiskLevel.toLowerCase()) {
            case "low" -> 0.02;
            case "medium" -> 0.03;
            case "high" -> 0.04;
            default -> 0.0;
        };
    }
}

class Salary {
    private EmployeeSalary employeeSalary;
    private Subsidy subsidy;
    private OvertimePay overtimePay;
    private Deductions deductions;

    public Salary(EmployeeSalary employeeSalary, Subsidy subsidy, OvertimePay overtimePay, Deductions deductions) {
        this.employeeSalary = employeeSalary;
        this.subsidy = subsidy;
        this.overtimePay = overtimePay;
        this.deductions = deductions;
    }

    public double calculateSalary() {
        double totalSubsidy = subsidy.calculateSubsidy(employeeSalary);
        double totalOvertime = overtimePay.calculateOvertimePay(employeeSalary);
        double totalDeductions = deductions.calculateDeductions(employeeSalary);

        return employeeSalary.getBaseSalary() + totalSubsidy + totalOvertime - totalDeductions;
    }
}
