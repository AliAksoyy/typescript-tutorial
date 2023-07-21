import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <div className="main">
      <InputForm />
      <TodoList />
    </div>
  );
};

export default Home;
