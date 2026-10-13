function EmployeeInfo(name, Salary)
{
    console.log("Welcome " + name + " Your monthly Salary is " + Salary);
}

const currentDateTime = new Date();
console.log("This is my first program");
console.log("Programe run on : " + currentDateTime.toLocaleString());

var EmpName = "John";
var EmpSalary = 50000;

EmployeeInfo(EmpName, EmpSalary);