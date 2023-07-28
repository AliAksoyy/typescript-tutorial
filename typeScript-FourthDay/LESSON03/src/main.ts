let stringArray: string[] = ["ali", "beyda"];

let guitars: Array<string> = ["Strat", "Les"];

let arrayData1: (string | number)[] = [1, 2, "ali", "beyda"];

let arrayData2: Array<boolean | number> = [false, 2];

let mixedData: Array<any> = ["strat", 3, false];

let arrayData: [string, number, boolean] = ["ali", 3, false];

// arrayData2 = guitars; //?? Type 'string' is not assignable to type 'number | boolean'

let test = [];

let bands: string[] = [];

bands.push("Ali Aksoy");

//Tuple

let myTuple: [string, number, boolean, number] = ["Ali Aksoy", 2, false, 2];
myTuple.push("asd");

// Object

let myObj: object;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "ali",
  prop2: true,
};

exampleObj.prop2 = false;

let a: Array<object> = [{ a: 3 }, { v: false }];

type Guitarist = {
  name: string;
  active: boolean;
  albums: (string | number)[];
  cb: (type: string) => void;
};

let evh: Guitarist = {
  name: "ali",
  active: false,
  albums: [12, "ali"],
  cb: (type) => console.log(`${type}`),
};
evh.cb("a");
