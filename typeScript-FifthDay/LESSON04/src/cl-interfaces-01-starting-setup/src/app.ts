// type AddFn = (a: string) => string;

interface AddFn {
  (a:string):string
}

let sum: AddFn = (a: string) => {
  return a;
};

