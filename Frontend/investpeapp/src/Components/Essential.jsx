import "../Styles/Essential.css";

function Essential() {
  return (
    <div className="essential">
      <div className="essential_1">
        <h1>
          Essential Features for the Super Trader in You - All in{" "}
          <span style={{ color: "#F6AD1F" }}>One Platform</span>
        </h1>
        <h2 style={{ fontSize: "25px" }}>
          Save hours of research by using our readymade screens to find your
          next investment
        </h2>
        <div>
          <img src="Images/learn-mobile 1.png" alt="" height={"50px"} />
          <h2>
            30+ ANALYTICAL TOOLS & CHARTING + LIVE TRADES + STOCK PICKS & MUCH
            MORE
          </h2>
        </div>
        <div className="essential_btn">
          <button className="get_app">Get started now</button>
          <p
            style={{
              fontSize: "18px",
              textDecoration: "underline",
              fontWeight: "400",
              marginLeft:"30px"
            }}
          >
            See all features
          </p>
        </div>
      </div>
      <div className="essential_2">
        <img
          src="Images/3.png"
          alt=""
          width={"380px"}
          style={{ marginTop: "40px", position: "relative" }}
        />
      </div>
    </div>
  );
}

export default Essential;
