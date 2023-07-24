interface AA {
  key: string;
  value: number;
}

class BB implements AA {
  constructor(public key: string, public value: number) {}
}
let a = new BB("2", 1);
console.log(a);

class CC<T, K> {
  constructor(public aaa: T, public bbb: K) {}
}

let h = new CC(3, 3);
console.log(h)
