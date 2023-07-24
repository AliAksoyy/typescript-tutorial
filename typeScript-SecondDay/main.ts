interface Person {
  first: string;
  last: string;
}

interface Employee {
  id: number;
  department: string;
  salary: number;
}

class Ali implements Person, Employee {
  salary: number = 444;
  constructor(
    public first: string,
    public last: string,
    public id: number,
    public department: string
  ) {}
}

let a = new Ali("a", "2", 3, "3");
console.log(a);


function beyda(calisan:Employee):void {
console.log(calisan.department);
}

beyda({id: 2, department: "3",salary:3})

