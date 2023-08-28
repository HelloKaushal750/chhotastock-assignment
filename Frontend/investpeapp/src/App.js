import "./App.css";
import Banner from "./Components/Banner";
import Essential from "./Components/Essential";
import Features from "./Components/Features";
import Navbar from "./Components/Navbar";
import Slider1 from "./Components/Slider1";
import Stock from "./Components/Stock";

function App() {
  return <div className="App">
    <Slider1 />
    <Navbar />
    <Banner />
    <Features />
    <Essential />
    <Stock />
  </div>;
}

export default App;
