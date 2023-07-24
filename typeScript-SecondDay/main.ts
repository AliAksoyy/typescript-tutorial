interface IPerson {
  firstName: string;
  lastName: string;
  getFullName(a: string[]): string;
}

class Person implements IPerson {
  firstName: string;
  lastName: string;

  constructor(a: string, b: string) {
    this.firstName = a;
    this.lastName = b;
  }
  getFullName(a: Array<string>): string {
    return this.firstName + " " + this.lastName + " " + a.join(" ");
  }
}

let a = new Person("s", "2");

console.log(a.getFullName(["1","2"]));
console.log(a);
