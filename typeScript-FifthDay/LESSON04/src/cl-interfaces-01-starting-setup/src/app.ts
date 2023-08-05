class Department {
  public name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  describe(this: Department) {
    console.log("Department" + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

let accounting = new Department("ali");

accounting.describe();
accounting.addEmployee("3")
accounting.employees.push("feyza", "fr");

console.log(accounting);

