import React from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../components/navbar";
import { connect } from "react-redux";

const Profile = (props) => {
  if (!props.dataUser.isLogin) {
    return (
      <Redirect
        to={{
          pathname: "/signin",
          state: { message: "login ulang" },
        }}
      />
    );
  } else {
    return (
      <React.Fragment>
        <Navbar {...props} />
        <div class="container mt-4">
          <div class="row d-flex justify-content-center">
            <div class="col-5 border p-5">
              <h5>Profile</h5>
              <p>Email: {props.dataUser.email}</p>
              <p>Nama lengkap: {props.dataUser.full_name}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
  };
};
export default connect(mapStateToProps)(Profile);
