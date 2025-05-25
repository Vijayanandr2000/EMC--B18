import "./App.css";
import { CountryProvider } from "./context/CountryContext";
import CountryList from "./pages/CountryList";

function App() {
  return (
    <CountryProvider>
      <CountryList />
    </CountryProvider>
  );
}

export default App;
