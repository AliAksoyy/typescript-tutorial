import React from "react";
import TodoListItem from "./TodoListItem";

interface ITodoList {
  todos: ITodoType[];
  toggleTodo: ToogleFn;
}

const TodoList: React.FC<ITodoList> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
