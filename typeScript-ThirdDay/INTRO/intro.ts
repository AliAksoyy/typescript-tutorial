export {};
const myUser = { name: "ali", age: 10 };

console.log("ali");

let greetings: string = "Hello Ali";

console.log(greetings);

// number

let userId: number = 334455.4;

let id: number;
id = 44.5;
id.toFixed();
console.log(id);

let isLog: boolean = false;

let hero;

function getHero() {
  return "thor";
}
hero = getHero(); // hero type any

// function

function addTwo(num: number): number {
  //   num.toUpperCase();

  return num + 2;
}

console.log("aa", addTwo(2));

let getUpper = (val: string) => val.toUpperCase();

getUpper("ali");

function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser("ali", "ali@gmail.com", true);
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("ali", "ali@gmail.com");

function getValue(myVal: number): boolean | string {
  if (myVal > 5) {
    return true;
  } else {
    return "OK";
  }
}

let result = getValue(6);

const getHello = (s: string): string => {
  return s;
};

const heros = ["thor", "spiderman", "ironman"]; // string[]
// const heros = [1, 2, 3]; // Array<number>

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
  //   return 3 because this func void
}

function handleError(msg: string):never {
  throw new Error(msg);
}
