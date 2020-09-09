import React, { useState, useEffect } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CountContext } from "./Context";
import CounterModal from "./CounterModal";

export default function App(props) {
  const [count, setCount] = useState(0);
  // const { className } = props;
  const { state } = React.useContext(CountContext);
  const { GlobalCount } = state;

  useEffect(() => {
    document.title = `You clicked ${count} times.`;
  });

  return (
    <>
      <div className="App">
        <h1>UseState Counter</h1>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <h1>Global State count</h1>
        <h2 className="count">{GlobalCount}</h2>
        <CounterModal {...props} />
      </div>
    </>
  );
}
