import React from "react";

const RenderApp = () => {
  const [count, setCount] = React.useState(0);
  const handleIncreement = () => {
    setCount(count + 1);
  };
  const handleDecreement = () => {
    setCount(count - 1);
  };

  return (
    <div className="count">
      <button onClick={handleIncreement}>+1</button>
      {count}
      <button onClick={handleDecreement}>-1</button>
    </div>
  );
};
export default RenderApp;
