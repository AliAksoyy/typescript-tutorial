import React, { useState } from "react";

type Task = string

interface IInputForm {
  addTodo: AddFn;
}

const InputForm: React.FC<IInputForm> = ({ addTodo }) => {
  const [task, setTask] = useState<Task>("");

  const handleClick = () => {
    
    addTodo(task);
    setTask("");
  };
  return (
    <div className="input-form">
      <input
        className="input-task"
        placeholder="Enter the todo..."
        type="text"
        maxLength={40}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={handleClick}
        className="btn-hover btn-color"
        type="submit"
        disabled={!task}
      >
        Add New Todo
      </button>
    </div>
  );
};

export default InputForm;
