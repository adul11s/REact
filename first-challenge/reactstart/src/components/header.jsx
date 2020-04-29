import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav classname="navbar navbar-expand-lg navbar-light">
          <div classname="container">
            <a classname="navbar-brand" href="https://academy.alphatech.id/">
              <img
                src={require("../images/logo-ALTA@2x.png")}
                classname="logo-awal"
              />
            </a>
            <button
              classname="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span classname="navbar-toggler-icon"></span>
            </button>
            <div classname="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div classname="navbar-nav ml-auto">
                <a
                  classname="nav-item nav-link active"
                  style={{ color: "#F47522" }}
                  href="index.html"
                >
                  Home <span classname="sr-only">(current)</span>
                </a>
                <a classname="nav-item nav-link" href="./index.html#about">
                  About
                </a>
                <a classname="nav-item nav-link" href="./team.html">
                  Team
                </a>
                <a classname="nav-item nav-link" href="./blog.html">
                  Blog
                </a>
                <a
                  classname="nav-item nav-link btn btn-warning"
                  href="./form.html"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
