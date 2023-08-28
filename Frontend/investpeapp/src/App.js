import "./App.css";
import Banner from "./Components/Banner";
import Features from "./Components/Features";
import Navbar from "./Components/Navbar";
import Slider1 from "./Components/Slider1";

function App() {
  return <div className="App">
    <Slider1 />
    <Navbar />
    <Banner />
    <Features />
  </div>;
}

export default App;
