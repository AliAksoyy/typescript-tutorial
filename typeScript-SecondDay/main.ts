class Employee {
  public empName: string;
  protected empCode: number;

  constructor(a: string, b: number) {
    this.empName = a;
    this.empCode = b;
  }
}

class AA extends Employee {
  private department: string;

  constructor(a: string, b: number, c: string) {
    super(a, b);
    this.department = c;
  }
}

let a = new AA("2", 2, "2");
console.log(a)
