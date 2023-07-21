import { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";
import axios from "axios";

const Home = () => {
  const baseUrl = "https://64ba0b0f79b7c9def6c188ff.mockapi.io/todos";

  const [todos, setTodos] = useState<ITodoType[]>([]);

  const getTodos = async () => {
    try {
      const { data } = await axios.get<ITodoType[]>(baseUrl);
      setTodos(data);
    } catch (err) {
      console.log(err);
    }
  };

  const addTodo: AddFn = async (text) => {
    const newTodo = {
      task: text,
      isDone: false,
    };

    try {
      await axios.post(baseUrl, newTodo);
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div className="main">
      <InputForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default Home;
