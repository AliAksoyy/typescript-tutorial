
interface IPerson {
  name: string;
  id: number;
}

class Ali implements IPerson {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
  getAli() {
    console.log(`${this.name} ${this.id}`);
  }
}

let a = new Ali("s", 3);
a.getAli();
