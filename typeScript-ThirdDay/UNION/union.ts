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
