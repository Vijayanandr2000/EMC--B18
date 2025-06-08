import React, { useContext } from "react";
import Two from "./2";
import { GlobalContext, Global1Context, Global2Context } from "../App";

const One = ({ name }) => {
  const data = useContext(GlobalContext);
  const data1 = useContext(Global1Context);
  const data2 = useContext(Global2Context);
  console.log("data", { data, data1, data2 });
  return (
    <div>
      One
      <Two name={name} />
    </div>
  );
};

export default One;
