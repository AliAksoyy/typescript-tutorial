import React from "react";

interface IListItem {
  todo: ITodoType;
  toggleTodo: ToogleFn;
  deleteTodo: DelFn;
}
const TodoListItem: React.FC<IListItem> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <li>
      {todo?.isDone ? (
        <p onClick={() => toggleTodo(todo)} className="checked">
          {todo.task}{" "}
        </p>
      ) : (
        <p onClick={() => toggleTodo(todo)}> {todo.task} </p>
      )}
      <span onClick={() => deleteTodo(todo.id)} className="task-icons">
        ✖️
      </span>
    </li>
  );
};

export default TodoListItem;
