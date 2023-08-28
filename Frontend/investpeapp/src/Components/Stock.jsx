import "../Styles/Stock.css";

const data = [
  {
    name: "Value Deals",
    image: "Images/Value Deals.png",
  },
  {
    name: "EV Revolution",
    image: "Images/EV Revolution.svg",
  },
  {
    name: "Hidden Gems",
    image: "Images/Outperformers.svg",
  },
  {
    name: "Hidden Gems",
    image: "Images/Value Deals.svg",
  },
];

function Stock() {
  return (
    <div className="stock">
      <div className="stock_detail">
        <h1>STOCK INVESTING, SIMPLIFIED</h1>
        <p style={{ width: "40%" }}>
          Online trading and investing in the market does not have to be boring.
        </p>
        <p style={{ width: "51%" }}>
          While we adopt a technology-led approach in building our product, we
          are keeping our users-investors and traders even before that
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginBottom:"70px"
        }}
      >
        {data.map((ele) => {
          return (
            <div
              style={{
                padding: "5px",
                borderRadius: "10px",
              }}
              className="each_data"
            >
              <div
                style={{
                  backgroundColor: "#222529",
                  color: "white",
                  borderRadius: "10px",
                  padding: "20px",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "30% 70%",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#1A1D21",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    className="image_stock"
                  >
                    <img
                      src={ele.image}
                      alt=""
                      width={"60%"}
                      height={"80%"}
                      style={{ marginTop: "-5px" }}
                    />
                  </div>
                  <h1 style={{ fontSize: "18px" }}>{ele.name}</h1>
                </div>
                <div>
                  <p>
                    For the people who would love to risk huge to get rewarded.
                    People who would love to risk huge to get rewarded
                  </p>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "30% 30%",
                    gap: "10px",
                    marginTop:"20px"
                  }}
                >
                  <p style={{ fontSize: "10px" }}>
                    CAGR{" "}
                    <span style={{ color: "white", fontSize: "14px" }}>
                      17.80%
                    </span>
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    Min Amount{" "}
                    <span style={{ color: "white", fontSize: "14px" }}>
                      120
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <hr style={{color:'grey', width:"95%"}} />
    </div>
  );
}

export default Stock;
