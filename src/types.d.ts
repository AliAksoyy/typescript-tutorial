  interface ITodoType {
    id: string | number;
    task: string;
    isDone: boolean;
  }

   type AddFn = (text: string) => void;

type ToogleFn = (task:ITodoType)=> void

type DelFn = (id: string | number)=>void