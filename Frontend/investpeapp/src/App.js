import "./App.css";
import Banner from "./Components/Banner";
import Essential from "./Components/Essential";
import Features from "./Components/Features";
import Navbar from "./Components/Navbar";
import Partners from "./Components/Partners";
import Reviews from "./Components/Reviews";
import Slider1 from "./Components/Slider1";
import Stock from "./Components/Stock";
import Footer from "./Components/Footer";

function App() {
  return <div className="App">
    <Slider1 />
    <Navbar />
    <Banner />
    <Features />
    <Essential />
    <Stock />
    <Partners />
    <Reviews />
    <Footer />
  </div>;
}

export default App;
