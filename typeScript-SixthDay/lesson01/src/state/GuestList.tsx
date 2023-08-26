import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guest, setGuest] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    setGuest([...guest, name]);
  };
  console.log(guest);

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guest?.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick} style={{ display: "block", marginTop: "5px" }}>
        Add Guest
      </button>
    </div>
  );
};

export default GuestList;
