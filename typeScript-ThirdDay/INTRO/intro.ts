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

function addTwo(num: number) {
  //   num.toUpperCase();

  return num + 2;
}

console.log("aa", addTwo(2));

let getUpper = (val: string) => val.toUpperCase();

getUpper("ali");

function signUpUser(name: string, email: string, isPaid: boolean) {}

signUpUser("ali", "ali@gmail.com", true);
let loginUser = (name: string, email: string, isPaid: boolean =false) => {};

loginUser("ali", "ali@gmail.com");
