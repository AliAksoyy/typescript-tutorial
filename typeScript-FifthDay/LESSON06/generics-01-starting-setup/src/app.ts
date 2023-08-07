function mege(objA: Object, objB: Object): Object {
  return Object.assign(objA, objB);
}

let a = mege({ name: "s" }, { age: 30 }) as { name: string; age: number };

