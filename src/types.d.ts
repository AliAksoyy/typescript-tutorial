  interface ITodoType {
    id: string | number;
    task: string;
    isDone: boolean;
  }

   type AddFn = (text: string) => void;