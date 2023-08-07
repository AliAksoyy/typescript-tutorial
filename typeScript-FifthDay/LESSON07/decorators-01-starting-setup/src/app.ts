function Autobind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  console.log(target);
  console.log(methodName);
  console.log(descriptor);
  console.log(descriptor.value);
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Print {
  msg: string = "Hello";

  constructor() {}
  @Autobind
  showMsg() {
    console.log(this.msg);
  }
}

let msg = new Print();

let button = document.querySelector("button")!;

button?.addEventListener("click", msg.showMsg);
