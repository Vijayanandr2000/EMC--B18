import "./App.css";
import FoodSection from "./components/FoodSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { foodSectionDatas } from "./data/foodSectionDatas";
import { footerDatas } from "./data/footerDatas";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Hero />

      <FoodSection foodSectionDatas={foodSectionDatas} />

      <Footer footerDatas={footerDatas} />
    </div>
  );
}

export default App;
