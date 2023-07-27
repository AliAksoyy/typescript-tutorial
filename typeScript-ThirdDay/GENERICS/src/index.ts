const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}
function identityTwo(val: any): any {
  return val;
}

function idetntityThree<Type>(val: Type): Type {
  return val;
}

function identityFour<T>(values: T[]): T {
  return values[0];
}

interface Bootle {
  brand: string;
  type: number;
}

// identityFour< Bootle>({brand:"2",})

function getSearchProducts<T>(products: T[]): T {
  //do some database operations
  const myIndex = 3;
  return products[myIndex];
}

const getModeSearchProducts = <T>(products: T[]): T => {
  // do some database operations
  const myIndex = 2;
  return products[myIndex];
};

interface Ali {
  name: string;
  id: number;
}

function anotherFunction<T extends Ali, U extends number, V extends keyof Ali>(
  valOne: T,
  valTwo: U,
  valThree: V
): object {
  return {
    valOne,
    valTwo,
    valThree,
  };
}
console.log(anotherFunction({ name: "ali", id: 2 }, 3, "id"));

class Sellable<T> {
  public cart: T[] = [];

  addToCart(product: T): void {
    this.cart.push(product);
  }
}

function detectType(val: number | string) {
  if (typeof val === "number") {
    return val + 2;
  } else {
    return (val += "ali");
  }
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  } else {
    return strs;
  }
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

let a = new Date();

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim != undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "bird food";
  }
}

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  side: number;
  kind: "square";
}
interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius;
  }
  return shape.side * shape.side;
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius;
    case "square":
      return shape.side * shape.side;
  }
}
