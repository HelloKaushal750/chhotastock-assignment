import "../../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div
        style={{ display: "flex", justifyContent: "left", marginLeft: "-40px" }}
      >
        <img src="Images/logo1.png" alt="" width={"240px"} />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "30px",
        }}
        className="footer_detail"
      >
        <div>
          <h1>Contact Us</h1>
          <p>8089225625</p>
          <p style={{ marginTop: "-10px" }}>contact@chhotastock.com</p>
        </div>
        <div>
          <h1>Company</h1>
          <p>About Us</p>
          <p style={{ marginTop: "-10px" }}>Privacy policy</p>
          <p style={{ marginTop: "-10px" }}>Tems and Conditions</p>
        </div>
        <div>
          <h1>Quick Links</h1>
          <p>Home</p>
          <p style={{ marginTop: "-10px" }}>Gateway</p>
          <p style={{ marginTop: "-10px" }}>Blog</p>
        </div>

        <div style={{marginLeft:'-70px'}}>
          <h1 style={{ marginTop: "20px" }}>Download the App Now !</h1>
          <img
            src="Images/Group.png"
            alt=""
            width={"150px"}
            height={"50px"}
            style={{ marginTop: "-12px" }}
          />
        </div>
      </div>
      <div style={{ marginTop: "0px" }}>
        <h1 style={{ fontSize: "15px" }}>Find Us On</h1>
        <div className="logo_img">
          <img
            src="Images/facebook-logo-icon-file-facebook-icon-svg-wikimedia-commons-4 2.png"
            alt=""
            width={"30px"}
            height={"25px"}
          />
          <img src="Images/youtube-logo-icone 2.png" alt="" width={"45px"} />
          <img
            src="Images/1200px-Instagram_icon 2.png"
            alt=""
            width={"35px"}
            height={"30px"}
          />
          <img
            src="Images/twitter-logo-vector-png-clipart-1 4.png"
            alt=""
            width={"45px"}
            height={"40px"}
          />
        </div>
      </div>
      <div className="footer_description">
        <p>
          © 2022 Chhotastock Technologies Private Limited. All rights reserved.
          CIN - U74999WB2012PTC184187 Chhotastock Technologies Private Limited.
        </p>
        <p>
          Chhotastock Technologies builds platforms & investment products to
          invest better in Indian investment asset classes.
        </p>
        <p style={{marginTop:'-15px'}}>
          Investing in Stocks/ETFs (Exchange Traded Funds) are subject to market
          risks. Read all the related documents before investing. Investors
          should consider all risk factors and consult their financial advisor
          before investing
        </p>
        <p>
          Registered Office: L151, 3rd Floor, CK Pearl, 5th Main Road, HSR
          Layout Sector 6, Bengaluru, Karnataka - 560102, India
        </p>
        <p>
          For any query / feedback / clarifications, email at
          contact@chhotastock.com
        </p>
        <p style={{width:'62%'}}>
          All Investment ideas, model portfolios & advisory are built by SEBI
          Registered Investment advisors (RIAs) & Chhotastock only facilitates
          investments in such baskets, portfolios.
        </p>
      </div>
    </div>
  );
}

export default Footer;
