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
    return val += "ali";
  }
}



