export {};

let score: number | string | boolean = 33;

score = "33";
score = true;

type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let ali: User & Admin = {
  name: "ali",
  id: 2,
  userName: "aksoy",
};

let ali1: User | Admin = {
  id: 2,
  userName: "aksoy",
};

function getDbId(id: number | string) {
  console.log(`DB id is ${id}`);
}

getDbId(2);
getDbId("2");

let getId = (id: number | string) => {
  if (typeof id === "string") {
    id; //?? string methodlatını görürüsz
  } else {
    id; // ?? number methodlatını görürüz
  }
};

const data: number[] = [1, 2, 3];
const data1: Array<string> = ["1", "2"];
const data2: Array<string | number> = ["1", "2", 1, 2];
const data3: (number | string | boolean)[] = [1, 2, "2", false];
const data4: any[] = [1, 2, "2", false, { a: 3 }];

let pi: 3.14 = 3.14;
// pi = 3.15; //?? atandığı değeriler uyuşmuyor

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment= "ali" //?? Type '"ali"' is not assignable to type '"aisle" | "middle" | "window"'.

const user: (string | number)[] = ["ali", "aksoy", 3];
const user1: [string, number, boolean] = ["ali", 3, true];

let rgb: [number, number, number] = [255, 255, 255];

type User1 = [number, string];

const newUser: User1 = [2, "ali"];

newUser[1] = "veli";
// newUser[0] = "beyda"; // ??? ype 'string' is not assignable to type 'number'.
newUser.push("true");
