import "../../Styles/Connect.css";
function Connect() {
  return (
    <div className="connect">
      <img
        src="Images/draws-pattern-svgrepo-com 2 (1).png"
        alt=""
        width={"38%"}
      />
      <img
        src="Images/draws-pattern-svgrepo-com 1.png"
        alt=""
        width={"40%"}
        style={{ borderRadius: "0 15% 15% 0" }}
      />
      <div
        style={{
          position: "absolute",
          textAlign: "left",
          width: "92%",
          color: "white",
          marginTop: "70px",
        }}
      >
        <h1 style={{ fontSize: "45px", width: "60%", marginTop:'10px' }}>
          Connect your platform finances now with InvestPe Gateway
        </h1>
        <p style={{ fontSize: "24px", width: "60%", color: "#CECECE" }}>
          We help brokers, wealth managers, fund managers & other businesses /
          startups server their customers better with our suite of modern
          digital investment stack
        </p>
        <button className="get_app" style={{marginTop:'20px'}}>Try InvestPe Now</button>
      </div>
    </div>
  );
}

export default Connect;
