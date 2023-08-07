function Log(target: any, propertyName: string) {
  console.log("... Logged");
  console.log(target);
  console.log(propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor decarotor");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Method decarotor");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string, position: number) {
  console.log("Parameter decarotor");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Person {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val) {
      this._price = val;
    }
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }
  @Log3
  getPrice(@Log4 tax: number) {
    this._price * (1 + tax);
  }
}
