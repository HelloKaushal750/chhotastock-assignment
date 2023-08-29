import "../../Styles/Navbar2.css";

function Navbar2() {
  return (
    <div className="navbar2">
      <div>
        <div className="logo2">
          <img src="Images/logo1.png" alt="" width={"80%"} />
        </div>
        <div>
          <button className="gateway_btn">
            Gateway <img src="Images/Ellipse 1.png" alt="" width={"19px"} />
          </button>
        </div>
      </div>
      <div className="prod_about">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          Products <img src="Images/Vector.png" alt="" width={"17px"} />
        </div>
        <div>AboutUs</div>
      </div>
    </div>
  );
}

export default Navbar2;
