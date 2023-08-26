import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC
      color="red"
      onClick={() => console.log("object")}
      children
    ></ChildAsFC>
  );
};

export default Parent;
