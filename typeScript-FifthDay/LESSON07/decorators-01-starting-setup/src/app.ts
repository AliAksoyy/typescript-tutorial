function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGGING - PERSON")
class Person {
  name: string = "Ali";
  constructor() {
    console.log("Creating person object");
  }
}
