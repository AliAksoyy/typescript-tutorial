import { createRoot } from "react-dom/client";
import Parent from "./props/Parent";
const container = document.getElementById("root")!;
const root = createRoot(container);

const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <Parent />
    </div>
  );
};

root.render(<App />);
