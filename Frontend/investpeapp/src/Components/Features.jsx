import "../Styles/Features.css";
function Features() {
  return (
    <div className="features">
      <div className="features_left">
        <h3>FEATURES</h3>
        <h1 style={{ width: "80%" }}>
          SAVE NOW. BUY LATER. SIMPLE & REALISTIC{" "}
        </h1>
        <p>
          Get what you love and save up over weeks or months to achieve it much
          lower price. Time & Flexibility on your side.
        </p>
        <div>
          <button className="get_app">Get the App</button>
          <p
            style={{
              fontSize: "18px",
              textDecoration: "underline",
              fontWeight: "400",
            }}
          >
            Learn More
          </p>
        </div>
      </div>
      <div className="features_right">
        <img src="Images/features_right.png" alt="" width={'95%'} height={'518px'}/>
      </div>
    </div>
  );
}

export default Features;
