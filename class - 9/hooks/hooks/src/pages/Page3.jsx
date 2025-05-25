import React from "react";
import { useContext } from "react";
import { NameContext } from "./Page1";

const Page3 = () => {
  const data = useContext(NameContext);
  const { name, onToggle, names } = data;

  return (
    <div onClick={onToggle}>
      Page3 - {name ? "true" : "false"}
      <ul>
        {names.map((name) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Page3;
