import React from "react";
import TodoListItem from "./TodoListItem";

interface ITodoList {
  todos: ITodoType[];
  toggleTodo: ToogleFn;
  deleteTodo: DelFn;
}

const TodoList: React.FC<ITodoList> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
