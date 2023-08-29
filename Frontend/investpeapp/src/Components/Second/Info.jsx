import "../../Styles/Info.css";
import { useState } from "react";

function Info() {
  const [data, setData] = useState({
    email: "",
    name: "",
    mobile: "",
    product: "",
  });
  return (
    <div className="info">
      <div>
        <h1>How would you like to work with us?</h1>
        <p style={{ fontSize: "24px", color: "#474747", width: "40%" }}>
          Tell us more about yourself, and we’ll reach out to you as soon as
          possible.
        </p>
      </div>
      <div className="info_details">
        <div>
          <div>
            <p>Work email</p>
            <input
              type="text"
              placeholder="abc@xyz.com"
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
          </div>
          <div>
            <p>Company Name</p>
            <input
              type="text"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
            />
          </div>
          <div>
            <p>Mobile Number</p>
            <input
              type="text"
              onChange={(e) => {
                setData({ ...data, mobile: e.target.value });
              }}
            />
          </div>
        </div>
        <div>
          <p>Which products are you interested in?</p>
          <div className="info_list">
            <div
              onClick={() => {
                setData({ ...data, product: "Mutual Funds" });
              }}
            >
              <h1>Mutual Funds</h1>

              <p>E2E infrastructure for mutual fund investing</p>
              <div>
                <img
                  src="Images/2ec6a7d5-af15-4f4c-9837-299a2c1511c2 (1) 1 (1).png"
                  alt=""
                  style={{
                    marginRight: "-15px",
                    marginTop: "-40px",
                    marginBottom: "5px",
                  }}
                />
              </div>
            </div>
            <div
              onClick={() => {
                setData({ ...data, product: "Indian Equity" });
              }}
            >
              <h1>Indian Equity</h1>

              <p>Stock gateway & stock baskets</p>
              <div>
                <img
                  src="Images/0b702430-3200-41fa-aac5-9631b2745061 1.png"
                  alt=""
                  style={{
                    marginRight: "-15px",
                    marginTop: "-30px",
                    marginBottom: "-10px",
                  }}
                />
              </div>
            </div>
            <div
              onClick={() => {
                setData({ ...data, product: "Digital Gold" });
              }}
            >
              <h1>Digital Gold</h1>

              <p>Buy & Sell digital gold hassle free</p>
              <div>
                <img
                  src="Images/5eae62d8-1e1a-41fb-b21f-53cc428d7362 1 (1).png"
                  alt=""
                  style={{
                    marginRight: "-25px",
                    marginTop: "-30px",
                    marginBottom: "-10px",
                  }}
                />
              </div>
            </div>
            <div
              onClick={() => {
                setData({ ...data, product: "Fixed Deposits" });
              }}
            >
              <h1>Fixed Deposits</h1>

              <p>Book FDs in 1click w/o opening a bank ac</p>
              <div>
                <img
                  src="Images/0ac60dcf-7d1b-4352-9fc6-57d6b94e8af4 1 (1).png"
                  alt=""
                  style={{
                    marginRight: "-15px",
                    marginTop: "-40px",
                    marginBottom: "5px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          marginTop: "-20px",
        }}
      >
        <button
          style={{
            backgroundColor: "#171E27",
            color: "white",
            fontSize: "20px",
            padding: "8px",
            borderRadius: "30px",
            width: "100px",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Info;
