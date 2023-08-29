import "../Styles/Partners.css";

function Partners() {
  return (
    <div>
      <div className="partners">
        <div>
          <h1>Some partners who make InvestPe products possible-</h1>
        </div>
        <div className="logo_image_1">
          <div>
            <img
              src="Images/image 12.png"
              alt=""
              width={"230px"}
              height={"90px"}
              style={{ marginTop: "10px" }}
            />
            <img
              src="Images/image 13.png"
              alt=""
              width={"280px"}
              height={"90px"}
              style={{ marginTop: "50px" }}
            />
            <img
              src="Images/image 14.png"
              alt=""
              width={"150px"}
              height={"40px"}
              style={{ marginTop: "60px" }}
            />
          </div>
          <div style={{ marginLeft: "15px" }}>
            <img
              src="Images/image 15.png"
              alt=""
              width={"90px"}
              height={"90px"}
              style={{ marginTop: "10px" }}
            />
            <img
              src="Images/image 16.png"
              alt=""
              width={"160px"}
              height={"145px"}
              style={{ marginTop: "10px" }}
            />
            <img
              src="Images/image 17.png"
              alt=""
              width={"220px"}
              height={"25px"}
              style={{ marginTop: "10px" }}
            />
          </div>
        </div>
        <div>
          <h1>
            ...and a few of the businesses building some incredible solutions
            with InvestPe
          </h1>
        </div>
        <div className="logo_image_2">
          <div>
            <img
              src="Images/image 3.png"
              alt=""
              width={"150px"}
              height={"50px"}
            />
          </div>
          <div>
            <img
              src="Images/image 4.png"
              alt=""
              width={"150px"}
              height={"50px"}
            />
          </div>
        </div>
      </div>
      <hr style={{ color: "grey", width:'78%',marginTop:"80px" }} />
    </div>
  );
}

export default Partners;
