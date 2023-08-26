import React, { useState } from "react";

const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement> | undefined) => {
    if (e) {
      setData(e.target.value);
    }
  };

  const onDragStart: React.DragEventHandler<HTMLDivElement> = (e): string => {
    console.log(e);
    return "s";
  };

  const [data, setData] = useState("");

  return (
    <div>
      <input type="text" value={data} onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        {" "}
        Drag me !
      </div>
    </div>
  );
};

export default EventComponent;
