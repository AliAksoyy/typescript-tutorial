"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
  name: "ali",
  email: "ali@gmail.com",
  isActive: true,
};
function createCourse() {
  return { name: "reactjs", price: 300 };
}
function createUserOne(user) {
  return user;
}
createUserOne({ name: "ali", email: "ali@gmail.com", isActive: false });
function printCoord(coor) {
  console.log(coor.x, coor.y);
}
printCoord({ x: 2, y: 1 });
function createUserTwo(u) {}
var myUser = {
  _id: "123",
  name: "ali",
  email: "ali@gmail.com",
  isActive: false,
};

myUser.email = "ali22@gmail.com";
// myUser._id = "23"; // readonly olduğu için sadece okuruz atama yapamayız
