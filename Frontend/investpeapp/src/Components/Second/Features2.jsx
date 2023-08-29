import "../../Styles/Features2.css";

function Features2() {
  return (
    <div className="features2">
      <div className="features_left">
        <h3>FEATURES</h3>
        <h1 style={{ width: "90%" }}>
          Launch the most Engaging Invest-Tech Solutions
        </h1>
        <p style={{ width: "96%", lineHeight: "30px" }}>
          We offer a suite of B2B Invest-tech solutions, that are cost-effective
          way to offer an engaging investment experience to your customers, with
          a faster time to market
        </p>
        <div style={{ marginTop: "20px" }}>
          <button className="get_app">Get Started</button>
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
      <div className="features2_right">
        <div style={{ display: "flex", gap: "40px", flexDirection: "column" }}>
          <div>
            <h1>Protection</h1>
            <img
              src="Images/image 2.png"
              alt=""
              height={"80px"}
              width={"80px"}
            />
            <p>Data protection guarentees</p>
          </div>
          <div>
            <h1>Flexibility</h1>
            <img
              src="Images/stick-svgrepo-com 1.png"
              alt=""
              height={"80px"}
              width={"80px"}
            />
            <p>Custom made for your requirements</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "40px", flexDirection: "column" }}>
          <div style={{ scale: "1.1", backgroundColor: "#171E27" }}>
            <h1>Tracking</h1>
            <img
              src="Images/activity-svgrepo-com 1.png"
              alt=""
              height={"100px"}
              width={"100px"}
            />
            <p style={{ marginTop: "-10px" }}>
              Track all your users’ financial transactions
            </p>
          </div>
          <div>
            <h1>Easiness</h1>
            <img
              src="Images/fire-minimalistic-svgrepo-com 1 (1).png"
              alt=""
              height={"80px"}
              width={"80px"}
            />
            <p>Go-to market in less than 7 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features2;
