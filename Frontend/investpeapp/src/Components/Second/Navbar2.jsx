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
        <div
          className="dropdown"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <button>
            Products <img src="Images/Vector.png" alt="" width={"17px"} />
          </button>
          <div className="dropdown-content">
            <div className="contain">
              <div
                style={{ display: "flex", flexDirection: "column" }}
                className="filed1"
              >
                <h1
                  style={{
                    color: "#28B570",
                    fontSize: "20px",
                    fontWeight: "400",
                  }}
                >
                  INVESTMENT
                </h1>
                <div>
                  <div>
                    <img
                      src="Images/2ec6a7d5-af15-4f4c-9837-299a2c1511c2 (1) 1.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1>Mutual Funds</h1>
                    <p>E2E infrastructure for mutual fund investing</p>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src="Images/0b702430-3200-41fa-aac5-9631b2745061 1.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1>Indian Equity</h1>
                    <p>
                      Ready-made stock baskets with major broker integrations
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src="Images/5eae62d8-1e1a-41fb-b21f-53cc428d7362 1 (1).png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1>Digital Gold</h1>
                    <p>Allow your users to buy & sell digital gold</p>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src="Images/0ac60dcf-7d1b-4352-9fc6-57d6b94e8af4 1 (2).png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1>Fixed Deposits</h1>
                    <p>Book FDs in one-click without opening a bank account</p>
                  </div>
                </div>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column" }}
                className="filed2"
              >
                <h1
                  style={{
                    color: "#28B570",
                    fontSize: "20px",
                    fontWeight: "400",
                  }}
                >
                  DATA
                </h1>

                <div>
                  <div>
                    <img
                      src="Images/2568c9d1-1f29-4503-ba43-f1b7ccf774e6 1 (1).png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1>Market Research</h1>
                    <p>Deep-tech stock research & analysis</p>
                  </div>
                </div>
                <div>
                  <div>
                    <img
                      src="Images/c0755514-eae2-4d59-bed6-72efe0fcf030 1 (1).png"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1>Historical Performance</h1>
                    <p>
                      Multi timeframe historical data for stocks, mutual funds &
                      digital gold
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{marginBottom:"5px"}}>AboutUs</div>
      </div>
    </div>
  );
}

export default Navbar2;
