// function Logger(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   return function (constructor: any) {
//     let hookData = document.getElementById(hookId);
//     const p = new constructor()
//     if (hookData) {
//       (hookData as HTMLDivElement).innerHTML = template;
//         hookData.querySelector("h1")!.textContent = p.name

//     }
//   };
// }
// @WithTemplate("<h1>My person Object</h1>", "app")
// @Logger("LOGGING - PERSON")
// class Person {
//   name: string = "Ali";
//   constructor() {
//     console.log("Creating person object");
//   }
// }

function Log(target: any, propertyName: string | Symbol) {
    console.log("Property Decaroter")
    console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  price: number;

  set setPrice(val: number) {
    if (val) {
      this.price = val;
    } else {
      throw new Error("Product");
    }
  }
  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
  getPrice(tax: number) {
    return this.price * (1 + tax);
  }
}
