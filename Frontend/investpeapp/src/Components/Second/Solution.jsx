import "../../Styles/Solution.css";

function Solution() {
  return (
    <div className="solution">
      <div>
        <p style={{ color: "#28B570", fontSize: "20px" }}>SOLUTION</p>
        <h1 style={{ width: "35%" }}>
          Stay ahead with our Wealth-tech as a service
        </h1>
      </div>
      <div className="solution_card">
        <div className="card_slot_1">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "30% 64%",
              gap: "55px",
            }}
          >
            <div style={{ backgroundColor: "#FEF8EC" }}>
              <img src="Images/image 153.svg" alt="" width={"90px"} />
              <p style={{ color: "#7C59CF" }}>INVESTPE</p>
              <h1
                style={{ color: "#7C59CF", fontSize: "26px", width: "180px" }}
              >
                Why does it make sense to start with us?
              </h1>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "30px 30px 0 30px",
                backgroundColor: "#FAFCFD",
              }}
            >
              <div style={{ fontSize: "12px", width: "50%" }}>
                <h1 style={{ color: "#7C59CF" }}>
                  We value your precious time.
                </h1>
                <h1 style={{ fontWeight: "100", marginTop: "50px" }}>
                  No regulatory licenses required as we have everything for you
                  to get started.
                </h1>
              </div>
              <img
                src="Images/Dashboard.png"
                alt=""
                width={"210px"}
                height={"230px"}
                style={{ marginTop: "68px" }}
              />
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "50% 43%",
              backgroundColor: "#FAFCFD",
            }}
          >
            <div>
              <p style={{ color: "#7C59CF", marginTop: "-10px" }}>
                MUTUAL FUNDS
              </p>
              <h1
                style={{
                  color: "#7C59CF",
                  fontSize: "26px",
                  marginTop: "-5px",
                }}
              >
                Get the complete MF Infra & focus on customer engagement
              </h1>
              <div>
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                    marginTop: "-15px",
                  }}
                >
                  <img src="Images/check-circle.svg" alt="" width={"20px"} />
                  <p style={{ fontSize: "18px" }}>SEBI compliant KYC process</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                    marginTop: "-15px",
                  }}
                >
                  <img src="Images/check-circle.svg" alt="" width={"20px"} />
                  <p style={{ fontSize: "18px" }}>Multi-AMC empanelments</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                    marginTop: "-15px",
                  }}
                >
                  <img src="Images/check-circle.svg" alt="" width={"20px"} />
                  <p style={{ fontSize: "18px" }}>Transact & Track orders</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                    marginTop: "-15px",
                  }}
                >
                  <img src="Images/check-circle.svg" alt="" width={"20px"} />
                  <p style={{ fontSize: "18px" }}>Advanced reporting</p>
                </div>
              </div>
            </div>
            <div>
              <p style={{ color: "#7C59CF", marginTop: "-10px" }}>
                INDIAN EQUITY
              </p>
              <h1
                style={{
                  color: "#7C59CF",
                  fontSize: "26px",
                  marginTop: "-5px",
                }}
              >
                One gateway for all top securities
              </h1>
              <div>
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                    marginTop: "-15px",
                  }}
                >
                  <img src="Images/check-circle.svg" alt="" width={"20px"} />
                  <p style={{ fontSize: "18px" }}>
                    Enable stocks, ETFs & expert curated stock baskets in your
                    app
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                    marginTop: "-15px",
                  }}
                >
                  <img src="Images/check-circle.svg" alt="" width={"20px"} />
                  <p style={{ fontSize: "18px" }}>
                    Integrates with all major brokers
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                    marginTop: "-15px",
                  }}
                >
                  <img src="Images/check-circle.svg" alt="" width={"20px"} />
                  <p style={{ fontSize: "18px" }}>
                    Offer expert curated & monitored stock basket solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            borderRadius: "25px",
            backgroundColor: "#FEF8EC",
            border: "1px solid #FDE3AF",
            padding: "30px",
          }}
        >
          <img
            src="Images/0ac60dcf-7d1b-4352-9fc6-57d6b94e8af4 1.png"
            alt=""
            width={"50px"}
          />
          <p style={{ color: "#7C59CF" }}>FIXED DEPOSITS</p>
          <h1 style={{ color: "#7C59CF", fontSize: "26px" }}>
            Fully digital FDs for your users
          </h1>
          <p style={{ fontSize: "14px" }}>
            Offer fixed deposits on your app or website, from multiple banks.
            Embed a pre-built SDK and go live in weeks.
          </p>
          <img
            src="Images/Screenshot 2023-08-20 at 4.52 1.png"
            alt=""
            width={"250px"}
            style={{ marginLeft: "-20px", marginBottom: "-28px" }}
          />
        </div>
      </div>
      <hr style={{width:'100%',color:'black', marginTop:"80px"}} />
    </div>
  );
}

export default Solution;
