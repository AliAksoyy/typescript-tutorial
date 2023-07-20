export {};
console.log("hello typescript");

// let a<T ,string> = (b:T,c:string):void =>console.log(b,c) ;

// a(1,"2")

function ali<T>(a: T, b: string): void {
  console.log(a, b);
}

ali("true","2")
