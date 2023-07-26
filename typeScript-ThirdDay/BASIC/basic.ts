export {};

const User = {
  name: "ali",
  email: "ali@gmail.com",
  isActive: true,
};

function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 300 };
}

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUserOne(user: User): User {
  return user;
}

createUserOne({ name: "ali", email: "ali@gmail.com", isActive: false });

type Point = {
  x: number;
  y: number;
};

function printCoord(coor: Point): void {
  console.log(coor.x, coor.y);
}

printCoord({ x: 2, y: 1 });

type IUser = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  crecardDetails?: number;
};

function createUserTwo(u: IUser) {}

let myUser: IUser = {
  _id: "123",
  name: "ali",
  email: "ali@gmail.com",
  isActive: false,
};

type CardNumber = {
  cardNumber: string;
};

type CardDate = {
  cardDate: string;
};
type cardDetails = CardDate &
  CardNumber & {
    cvv: number;
  };

myUser.email = "ali22@gmail.com";
// myUser._id = "23"; // readonly olduğu için sadece okuruz atama yapamayız

const superHeros: string[] = [];
const heroPower: number[] = [];

superHeros.push("ali");
heroPower.push(2);

type UserThird = {
  name: string;
  isActived: boolean;
};

const allUsers: UserThird[] = [];
// const allUsers: Array<UserThird> = [];

allUsers.push({ name: "a", isActived: true });

const MLModels: Array<number[] | string[]> = [[255, 255, 255, 1, 2], ["2"]];

const MLModels2: number[][] = [[255, 255, 255], []];

function doStuff(values: ReadonlyArray<string>) {
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  //   values.push("hello"); //??? Property "push" does not exist on type 'readonly ' string []
  
}
