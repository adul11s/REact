import React, { Component } from "react";

class Footer extends Component {
  render() {
    const margin = { marginRight: "10px" };
    return (
      <div className="container-fluid">
        <div
          className="row justify-content-center"
          style={{
            backgroundColor: "#19345E",
            marginTop: "100px",
            paddingBottom: "42px",
          }}
        >
          <div
            className="col-lg-5 d-flex justify-content-center"
            style={{ marginTop: "60px" }}
          >
            <img
              className="logo-footer logo-awal"
              src={require("../images/logo-ALTA-v2@2x.png")}
              alt="footer awal"
            />
          </div>
          <div
            className="col-lg-4 d-flex justify-content-center"
            style={{ paddingTop: "44px" }}
          >
            <ul className="row" id="logo-sosmed">
              <span
                style={{ color: "white", fontSize: "14px", marginTop: "20px" }}
              >
                Social Media
              </span>
              <li className="col-lg-12 justify-content-center">
                <a href="https://facebook.com">
                  <img
                    className="logo"
                    src={require("../images/ic_fb.png")}
                    style={margin}
                    alt="facebook"
                  />
                </a>
                <a href="https://twitter.com">
                  <img
                    className="logo"
                    src={require("../images/ic_twitter.png")}
                    style={margin}
                    alt="twitter"
                  />
                </a>
                <a href="https://instagram.com">
                  <img
                    className="logo"
                    src={require("../images/ic_ig.png")}
                    style={margin}
                    alt="instagram"
                  />
                </a>
                <a href="https://linkedin.com">
                  <img
                    className="logo"
                    src={require("../images/ic_linkedin.png")}
                    style={margin}
                    alt="linkedin"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3" style={{ marginTop: "30px" }}>
            <p
              style={{
                color: "white",
                fontSize: "14px",
                textAlign: "center",
                paddingTop: "63px",
              }}
            >
              {" "}
              Copyright &copy; 2019 Alterra
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
