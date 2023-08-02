import Counter from "./components/Counter";
import Heading from "./components/Heading";
import { Section } from "./components/Section";
import List from "./components/List";

import { useState } from "react";
const App = () => {
  const [count, setCount] = useState<number | null>(1);
  return (
    <>
      <Heading title={"Hello"} />
      <Section title={"Different Title"}>This is my section</Section>
      <Counter setCount={setCount}> Count is {count} </Counter>
      <List
        items={["Coffe", "Tacos", "Code"]}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </>
  );
};

export default App;
