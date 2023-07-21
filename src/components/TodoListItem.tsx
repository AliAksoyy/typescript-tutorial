import React from "react";

interface IListItem {
  todo: ITodoType;
  toggleTodo: ToogleFn;
}
const TodoListItem: React.FC<IListItem> = ({ todo, toggleTodo }) => {
  return (
    <li>
      {todo?.isDone ? (
        <p className="checked">{todo.task} </p>
      ) : (
        <p> {todo.task} </p>
      )}
      <span className="task-icons">✖️</span>
    </li>
  );
};

export default TodoListItem;
