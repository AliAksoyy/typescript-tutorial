interface Color {
  color: { r: number; g: number; b: number };
}

interface Shape {
  area: number;
}

class Square implements Color, Shape {
  color: { r: number; g: number; b: number };
  area: number;

  constructor(c: { r: number; g: number; b: number }, a: number) {
    this.color = c;
    this.area = a;
  }

  ali(): void {
    console.log("object");
  }
}

let a = new Square({ r: 0, g: 0, b: 0 }, 2);

console.log(a);
