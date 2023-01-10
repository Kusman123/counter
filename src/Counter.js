import { useState } from "react";
function Counter() {
  const [count, setcount] = useState(0);

  const handleIncrement = () => {
    setcount(count + 1);
  };

  const handleDecrement = () => {
    setcount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1 className="main-text">Counter</h1>
      <div className="count">{count}</div>
      <div className="btn-container">
        <button className="btn btn-increment" onClick={handleIncrement}>
          Increment
        </button>
        <button className="btn btn-decrement" onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}
export default Counter;
