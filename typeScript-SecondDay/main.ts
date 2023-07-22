class Person {
  name: string;
  age: number;
  phone: string;

  constructor(name: string, age: number, phone: string) {
    this.name = name;
    this.age = age;
    this.phone = phone;
    console.log("oluşturuldu");
  }
  showInfos() {
    console.log(`${this.name} ${this.age} ${this.phone}`);
  }
}

let person1 = new Person("s", 2, "3");

class Employee extends Person {
  salary: number;
  constructor(name: string, age: number, phone: string, salary: number) {
    super(name, age, phone);
    this.salary = salary;
  }

  showInfos() {
    super.showInfos();
    console.log(this.salary);
  }

  changeDepartment() {
    console.log("departmant değiştirliyoe");
  }
}

let a = new Employee("11", 2, "3", 4);
a.changeDepartment();
a.showInfos();

console.log(a);
