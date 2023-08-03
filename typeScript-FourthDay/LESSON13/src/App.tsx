import {
  useState,
  useEffect,
  useCallback,
  KeyboardEvent,
  MouseEvent,
  useMemo,
  useRef,
} from "react";

interface User {
  id: number;
  username: string;
}

type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 37;

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [users] = useState<User[] | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("mouting");
    console.log(users);
    return () => console.log("unmouting");
  }, [users]);

  const addTwo = useCallback(
    (
      event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => {
      console.log(event);
      setCount((prev) => prev + 1);
    },
    []
  );

  const result = useMemo<number>(() => fib(myNum), []);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default App;
