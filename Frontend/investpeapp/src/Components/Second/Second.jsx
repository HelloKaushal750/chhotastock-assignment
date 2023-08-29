import Banner2 from "./Banner2";
import Connect from "./Connect";
import Features2 from "./Features2";
import Navbar2 from "./Navbar2";
import Slider from "./Slider";
import Solution from "./Solution";
import Partners from "../First/Partners";
import Info from "./Info";
import Footer from '../First/Footer'

function Second() {
  return (
    <>
      <Slider />
      <Navbar2 />
      <Banner2 />
      <Features2 />
      <Connect />
      <Solution />
      <div style={{marginTop:"50px"}}>
        <Partners />
      </div>
      <Info />
      <Footer />
    </>
  );
}

export default Second;
