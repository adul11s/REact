import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Navbar from "../components/navbar";

class SignIn extends Component {
  state = { nama: "", sandi: "" };

  changeInput = (el) => {
    this.setState({ [el.target.name]: el.target.value });
  };

  login = () => {
    const { nama, sandi } = this.state;
    const data = {
      username: nama,
      password: sandi,
    };
    axios
      .post("https://derby.free.beeceptor.com/auth", data)
      .then((response) => {
        if (response.data.hasOwnProperty("api_key")) {
          localStorage.setItem("api_key", response.data.api_key);
          localStorage.setItem("is_login", true);
          localStorage.setItem("full_name", response.data.full_name);
          localStorage.setItem("email", response.data.email);
          this.props.history.push("/profile");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const message = this.props.location.state
      ? this.props.location.state.message
      : "masukkan inputan";
    return (
      <React.Fragment>
        <Navbar {...this.props} />
        <div class="container mt-4">
          <div class="row d-flex justify-content-center">
            <div class="col-5 border p-5">
              <form onSubmit={(el) => el.preventDefault()}>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="text"
                    name="nama"
                    placeholder="username"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(el) => this.changeInput(el)}
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    name="sandi"
                    placeholder="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    onChange={(el) => this.changeInput(el)}
                  />
                </div>
                <button class="btn btn-primary" onClick={() => this.login()}>
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(SignIn);
