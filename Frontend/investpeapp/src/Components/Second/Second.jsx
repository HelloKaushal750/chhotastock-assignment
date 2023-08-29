import Banner2 from "./Banner2";
import Connect from "./Connect";
import Features2 from "./Features2";
import Navbar2 from "./Navbar2";
import Slider from "./Slider";
import Solution from "./Solution";
import Partners from "../First/Partners";

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
    </>
  );
}

export default Second;
