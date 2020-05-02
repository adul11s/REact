import React from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../components/navbar";

const Profile = (props) => {
  const is_login = JSON.parse(localStorage.getItem("is_login"));
  const email = localStorage.getItem("email");
  const full_name = localStorage.getItem("full_name");

  if (is_login === null) {
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
              <p>Email: {email}</p>
              <p>Nama lengkap: {full_name}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default Profile;
