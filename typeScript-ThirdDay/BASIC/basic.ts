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
