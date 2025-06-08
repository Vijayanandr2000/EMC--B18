import React from "react";
import Three from "./3";

const Two = ({ name }) => {
  return (
    <div>
      Two
      <Three name={name} />
    </div>
  );
};

export default Two;
