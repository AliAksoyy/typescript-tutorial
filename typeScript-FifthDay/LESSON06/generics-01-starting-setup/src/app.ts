function ali<T extends object,U extends keyof T>(a:T, b:U) {
  return a[b];
}

console.log(ali({name:"d"}, "name"));
