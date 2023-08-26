import { createRoot } from "react-dom/client";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";
const container = document.getElementById("root")!;
const root = createRoot(container);

const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <GuestList />
      <UserSearch />
      <EventComponent />
    </div>
  );
};

root.render(<App />);
