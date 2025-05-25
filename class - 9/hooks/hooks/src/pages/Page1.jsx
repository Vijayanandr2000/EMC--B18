import { createContext, useState, useMemo } from "react";

import React from "react";
import Page2 from "./Page2";
import Page3 from "./Page3";
import { useCallback } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export const NameContext = createContext();

const Page1 = () => {
  const [name, setName] = useState(true);

  const onToggle = useCallback(() => {
    setName((prevName) => !prevName);
  }, [setName]);

  //   const names = ["vijay", "kumar", "sai", "siva"];

  const names = useMemo(() => ["vijay", "kumar", "sai", "siva"], []);

  const inputRef = useRef();

  //   console.log("inputRef", );

  useEffect(() => {
    if (name) inputRef.current.focus();
  }, [name]);

  return (
    <>
      <NameContext.Provider
        value={{
          name,
          onToggle,
          names,
        }}
      >
        <div>
          <div>
            <input type="text" ref={inputRef} />
          </div>
          Page1
          <Page2 />
        </div>
      </NameContext.Provider>
    </>
  );
};

export default Page1;
