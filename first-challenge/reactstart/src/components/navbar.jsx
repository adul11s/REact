import React, { Component } from "react";
import Search from "./search";
import { Link } from "react-router-dom";
class Navbar extends Component {
  changeRouter = async (category) => {
    if (this.props.handleRouter) {
      this.props.handleRouter(category);
    } else {
      await this.props.history.replace("/news-category/" + category);
    }
  };
  is_login = JSON.parse(localStorage.getItem("is_login"));
  signOut = () => {
    localStorage.removeItem("is_login");
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link
            to="/"
            onClick={this.props.getNews ? () => this.props.getNews() : null}
            className="navbar-brand"
            href=""
          >
            {" "}
            <img src={require("../logo.svg")} width="100" height="100" alt="" />
            KabarKabar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link
                  class="nav-link"
                  onClick={() => this.changeRouter("sports")}
                  href=""
                >
                  Sepakbola <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  onClick={() => this.changeRouter("business")}
                  href=""
                >
                  Ekonomi
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link"
                  onClick={() => this.changeRouter("entertainment")}
                  href=""
                >
                  Hiburan
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  href=""
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Lainnya
                </Link>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link class="dropdown-item" href="">
                    Action
                  </Link>
                  <Link class="dropdown-item" href="">
                    Another action
                  </Link>
                  <div class="dropdown-divider"></div>
                  <Link class="dropdown-item" href="">
                    Something else here
                  </Link>
                </div>
              </li>
            </ul>

            <Search {...this.props} />
            {this.is_login ? (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" href="">
                    Profil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link onClick={this.signOut} className="nav-link" href="">
                    Sign Out
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/signin" className="nav-link" href="">
                    Masuk
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="">
                    Daftar
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
