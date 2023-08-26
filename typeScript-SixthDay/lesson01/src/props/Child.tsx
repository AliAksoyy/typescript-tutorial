interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const ChildAsFC: React.FunctionComponent<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
