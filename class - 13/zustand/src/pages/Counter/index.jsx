import { useCounterStore } from "../../stores/Counter";

const Counter = () => {
  const { value, inc, dec, reset } = useCounterStore();

  return (
    <>
      <h1>Counter: {value}</h1>
      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
