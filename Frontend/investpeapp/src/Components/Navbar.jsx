import "../Styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="Images/logo.png" alt="" width={'40px'} />
        <div style={{color:'white',textAlign:'left'}}>
            <h1>InvestPe</h1>
            <p>INVEST TO PAY. INVEST TO FUND</p>
        </div>
      </div>
      <div className="container">
        <img src="Images/search-svgrepo-com (3) 1.png" alt="" width={'15px'} height={'15px'} />
        <input type="text" placeholder="Search stocks, ETFs, indices" />
      </div>
      <div>
        <button className="login_btn">
          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="Images/login-2-svgrepo-com (1) 1.png"
              alt=""
              width={"30px"}
              height={"30px"}
            />
            <p style={{ fontSize: "20px" }}> Login</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
