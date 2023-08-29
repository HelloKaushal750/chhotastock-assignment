import "../../Styles/Banner2.css";

function Banner2() {
  return (
    <div className="banner2">
      <div className="top_banner">
        <div>
          <h1>
            INVESTMENT STACK <span style={{ color: "black" }}>for India</span>
          </h1>
          <h3>
            Elevate Your Investment Strategy with Our{" "}
            <span style={{ color: "#28B570" }}>Comprehensive APIs</span>
          </h3>
        </div>
        <div>
          <h4>
            Launch financial services in a matter of days. Take your pick from
            our flexible APIs, SDKs, or ready-to-use screens.
          </h4>
          <div style={{ display: "flex", gap: "10px",alignItems:'center' ,marginTop:'-20px'}}>
            <p style={{ fontSize: "20px", textDecoration: "underline" }}>
              See our products
            </p>
            <button
              style={{
                backgroundColor: "#777D85",
                borderRadius: "50%",
                border: "none",
                height: "25px",
                width: "25px",
                display: "flex",
                alignItems: "center",
                justifyContent:'center'
              }}
            >
              <img src="Images/Vector.png" alt="" width={"80%"} />
            </button>
          </div>
          <button className="contact_us_btn">Contact Us</button>
        </div>
      </div>
      <div style={{marginTop:"30px"}}>
        <img src="Images/cards.png" alt="" width={'850px'} />
      </div>
    </div>
  );
}

export default Banner2;
