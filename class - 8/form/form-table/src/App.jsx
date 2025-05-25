import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // let count = 0;
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>count: {count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
            setCount((prev) => prev + 1);
            setCount((prev) => prev + 1);
            setCount((prev) => prev + 1);
            console.log(count);
          }}
        >
          Inc
        </button>
      </div>
    </>
  );
}

export default App;
