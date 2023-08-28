import { createRoot } from "react-dom/client";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";
import Parent from "./props/Parent";
const container = document.getElementById("root")!;
const root = createRoot(container);

const App= () => {
  return (
    <div>
      <Parent />
      <GuestList />
      <UserSearch />
      <EventComponent />
    </div>
  );
};

root.render(<App />);
