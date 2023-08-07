function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithA(template: string, hookId: string) {
  return function (_constructor: Function) {
    let hookData = document.getElementById(hookId);
    if (hookData) {
      (hookData as HTMLDivElement).innerHTML = template;
    }
  };
}
@WithA("ssss","app")
@Logger("LOGGING - PERSON")
class Person {
  name: string = "Ali";
  constructor() {
    console.log("Creating person object");
  }
}
