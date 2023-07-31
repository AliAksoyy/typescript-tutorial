type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less spesific

let a: One = "hello";
let b = a as Two;
b = 4;
b = "hello"; // les spesific
let c = a as Three; // more spesific

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") {
    return a + b;
  }
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

// ??Be careful TS sees no problem - but a string is returned

let nextVal: number = addOrConcat(2, 2, "add") as number;

// 10 as string;
10 as unknown as string;

// The DOM

const img = document.querySelector("img") as HTMLImageElement; // ?? HTMLImageElement | null

const img1 = document.querySelector("#ali"); // ?? Element | null

const myImg = document.getElementById("#img")! as HTMLImageElement; // ?? HTMLElement | null

const nextImg = <HTMLImageElement>document.getElementById("#img");

img.src;
myImg.src;
