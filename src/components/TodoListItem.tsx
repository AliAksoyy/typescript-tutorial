import React from "react";

interface IListItem {
  todo:ITodoType
}
const TodoListItem :React.FC<IListItem> = ({todo}) => {
  return (
    <li>
      <p className="checked">Todo </p>
      <p> Todo </p>
      <span className="task-icons">✖️</span>
    </li>
  );
};


export default TodoListItem;
