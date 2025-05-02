
<?php
class EmployeeSalary {
    private string $employeeName;
    private float $baseSalary;
    private int $daytimeOvertimeHours;
    private int $nighttimeOvertimeHours;
    private int $holidayOvertimeHours;

    public function __construct(string $employeeName, float $baseSalary, int $daytimeOvertimeHours, int $nighttimeOvertimeHours, int $holidayOvertimeHours) {
        $this->employeeName = $employeeName;
        $this->baseSalary = $baseSalary;
        $this->daytimeOvertimeHours = $daytimeOvertimeHours;
        $this->nighttimeOvertimeHours = $nighttimeOvertimeHours;
        $this->holidayOvertimeHours = $holidayOvertimeHours;
    }

    public function getEmployeeName() {
        return $this->employeeName;
    }

    public function getBaseSalary() {
        return $this->baseSalary;
    }

    public function getDaytimeOvertimeHours() {
        return $this->daytimeOvertimeHours;
    }

    public function getNighttimeOvertimeHours() {
        return $this->nighttimeOvertimeHours;
    }

    public function getHolidayOvertimeHours() {
        return $this->holidayOvertimeHours;
    }
}

class Subsidy {
    private float $minimumWage;

    public function __construct(float $minimumWage) {
        $this->minimumWage = $minimumWage;
    }

    public function calculateSubsidy(EmployeeSalary $employeeSalary) {
        if ($employeeSalary->getBaseSalary() < 2 * $this->minimumWage) {
            return $this->minimumWage;
        } else {
            return 0;
        }
    }
}

class OvertimePay {
    public function calculateOvertimePay(EmployeeSalary $employeeSalary) {
        $daytimeOvertimeRate = $employeeSalary->getBaseSalary() / 240 * 1.25;
        $nighttimeOvertimeRate = $employeeSalary->getBaseSalary() / 240 * 1.75;
        $holidayOvertimeRate = $employeeSalary->getBaseSalary() / 240 * 2;

        $daytimeOvertimePay = $employeeSalary->getDaytimeOvertimeHours() * $daytimeOvertimeRate;
        $nighttimeOvertimePay = $employeeSalary->getNighttimeOvertimeHours() * $nighttimeOvertimeRate;
        $holidayOvertimePay = $employeeSalary->getHolidayOvertimeHours() * $holidayOvertimeRate;

        return $daytimeOvertimePay + $nighttimeOvertimePay + $holidayOvertimePay;
    }
}

class Deductions {
    private string $arlRiskLevel;

    public function __construct(string $arlRiskLevel) {
        $this->arlRiskLevel = $arlRiskLevel;
    }

    public function calculateDeductions(EmployeeSalary $employeeSalary) {
        $healthDeductions = $employeeSalary->getBaseSalary() * 0.04;
        $pensionDeductions = $employeeSalary->getBaseSalary() * 0.04;
        $arlDeductions = $employeeSalary->getBaseSalary() * $this->getArlPercentage();

        return $healthDeductions + $pensionDeductions + $arlDeductions;
    }

    private function getArlPercentage() {
        switch ($this->arlRiskLevel) {
            case 'low':
                return 0.02;
            case 'medium':
                return 0.03;
            case 'high':
                return 0.04;
            default:
                return 0;
        }
    }
}

class Salary {
    private $employeeSalary;
    private $subsidy;
    private $overtimePay;
    private $deductions;

    public function __construct(EmployeeSalary $employeeSalary, Subsidy $subsidy, OvertimePay $overtimePay, Deductions $deductions) {
        $this->employeeSalary = $employeeSalary;
        $this->subsidy = $subsidy;
        $this->overtimePay = $overtimePay;
        $this->deductions = $deductions;
    }

    public function calculateSalary() {
        $subsidy = $this->subsidy->calculateSubsidy($this->employeeSalary);
        $overtimePay = $this->overtimePay->calculateOvertimePay($this->employeeSalary);
        $deductions = $this->deductions->calculateDeductions($this->employeeSalary);

        return $this->employeeSalary->getBaseSalary() + $subsidy + $overtimePay - $deductions;
    }
}

$employeeSalary = new EmployeeSalary ('Laura vanessa', 2000000, 7, 4, 2);
$subsidy = new Subsidy (1300000);
$overtimePay = new OvertimePay ();
$deductions = new Deductions('medium');

$salary = new Salary($employeeSalary, $subsidy, $overtimePay, $deductions);


   echo "Nombre: " . $employeeSalary->getEmployeeName() . "\n";
   echo "<br/>";
   echo "Salario base: " . number_format($employeeSalary->getBaseSalary()) . "\n";
   echo "<br/>";
   echo "Horas extras diurnas: " . $employeeSalary->getDaytimeOvertimeHours() . "\n";
   echo "<br/>";
   echo "Horas extras nocturnas: " . $employeeSalary->getNighttimeOvertimeHours() . "\n";
   echo "<br/>";
   echo "Horas extras festivas: " . $employeeSalary->getHolidayOvertimeHours() . "\n";
   echo "<br/>";
   echo "Subsidio: " . number_format($subsidy->calculateSubsidy($employeeSalary)) . "\n";
   echo "<br/>";
  echo "Pago horas extra: " . number_format($overtimePay->calculateOvertimePay($employeeSalary)) . "\n";
  echo "<br/>";
  echo "Deducciones: " . number_format($deductions->calculateDeductions($employeeSalary)) . "\n";
  echo "<br/>";
  echo "Salario total neto: " . number_format($salary->calculateSalary()) . "\n";


?>