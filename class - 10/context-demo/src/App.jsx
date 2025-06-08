import { createContext } from "react";
import "./App.css";
import One from "./pages/1";

export const GlobalContext = createContext();
export const Global1Context = createContext();
export const Global2Context = createContext();

const GlobalContextProvider = ({ children }) => {
  let name = "vijay";

  return (
    <GlobalContext.Provider value={name}>{children}</GlobalContext.Provider>
  );
};

function App() {
  let name1 = "vijay1";
  let name2 = "vijay2";
  return (
    <GlobalContextProvider>
      <Global1Context.Provider value={name1}>
        <One />
        <Global2Context.Provider value={name2}></Global2Context.Provider>
      </Global1Context.Provider>
    </GlobalContextProvider>
  );
}

export default App;
