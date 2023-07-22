export {};

abstract class Database {
  get() {
    console.log("get");
  }
  add() {
    console.log("add");
  }

  abstract delete();
  abstract update();
}


