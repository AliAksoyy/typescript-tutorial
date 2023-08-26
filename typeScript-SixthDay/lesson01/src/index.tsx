import { createRoot } from "react-dom/client";
import GuestList from "./state/GuestList";
const container = document.getElementById("root")!;
const root = createRoot(container);

const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <GuestList />
    </div>
  );
};

root.render(<App />);
