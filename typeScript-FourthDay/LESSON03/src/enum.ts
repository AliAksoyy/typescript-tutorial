enum Grade {
  U = 1,
  D,
  C = "ali",
  B = 7,
  A,
}
console.log(Grade.U);

//?? Type Aliases

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitar = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

type UserId = stringOrNumberArray;

// interface Ali =stringOrNumberArray   //??'stringOrNumberArray' only refers to a type, but is being used as a value here

// Literals types

let myName: "Dave";

let userName: "Dave" | "John" | "Amy";

userName: "Amy";


