import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

class Team extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="container-fluid">
          <div class="row" id="about">
            <img
              src={require("../images/ornament_batik.png")}
              style={{
                width: "200px",
                height: "291px",
                marginLeft: "18px",
                marginBottom: "-220px",
              }}
            />
            <p
              class="col-11"
              style={{
                textAlign: "center",
                marginBottom: "120px",
                marginTop: "30px",
              }}
            >
              &mdash; <span>About Our Team</span> &mdash;
            </p>
          </div>
          <div class="row">
            <div class="col-5 d-flex justify-content-center">
              <p
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  marginTop: "-80px",
                }}
              >
                Backend Developer
              </p>
            </div>
          </div>
        </div>
        {/* orang pertama */}
        <div class="container">
          <div class="row">
            <div class="col-md-5 offset-md-2 col-sm-12">
              <img
                src={require("../images/shutterstock_796346011@2x.png")}
                style={{ width: "320px", height: "399px" }}
              />
              <div class="border-gambarteam"></div>
            </div>
            <div class="col-md-4 col-sm-12">
              <div class="table-responsive">
                <table
                  style={{
                    marginTop: "30px",
                    font: "Poppins",
                    fontSize: "18px",
                    borderCollapse: "separate",
                    borderSpacing: "0 10px",
                  }}
                >
                  <tr>
                    <td>First Name</td>
                    <td style={{ width: "50px" }}> :</td>
                    <td>Abdullah Romli</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td>Last Name</td>
                    <td> :</td>
                    <td>Mubarrok</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td>Birth Date</td>
                    <td> :</td>
                    <td>11 April 1993</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td>Nationality</td>
                    <td> :</td>
                    <td>Indonesia</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td>Address</td>
                    <td>:</td>
                    <td>Depok</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td>Email</td>
                    <td>:</td>
                    <td>abdullahromli11@gmail.com</td>
                  </tr>
                  <tr></tr>
                  <tr>
                    <td>Phone</td>
                    <td>:</td>
                    <td>0895348819761</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row border-garis" style={{ paddingTop: "50px" }}>
            <div class="col-md-2"></div>
            <div class="col-md-4">
              <h2 style={{ fontSize: "25px", fontWeight: "bold" }}>
                Education
              </h2>
              <ul>
                <li>
                  <img
                    src={require("../images/calendar.png")}
                    class="gambar-kalendar"
                  />{" "}
                  2011 - 2018 <br />
                  <span class="bold-huruf">
                    {" "}
                    Teknik Mesin dan Biosistem IPB <br />
                  </span>
                  Bachelor Degree
                </li>
                <br />
                <li>
                  <img
                    src={require("../images/calendar.png")}
                    class="gambar-kalendar"
                  />{" "}
                  2009 - 2011 <br />
                  <span class="bold-huruf"> MAN 11 Jakarta</span>
                  <br />
                </li>
                <br />
                <li>
                  <img
                    src={require("../images/calendar.png")}
                    class="gambar-kalendar"
                  />{" "}
                  2006 - 2009 <br />
                  <span class="bold-huruf"> SMP Darul Falah </span>
                </li>
                <br />
                <li>
                  <img
                    src={require("../images/calendar.png")}
                    class="gambar-kalendar"
                  />{" "}
                  2000 - 2006 <br />
                  <span class="bold-huruf"> SDN Pasir 1 </span>
                </li>
              </ul>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-4">
              <h2 style={{ fontSize: "25px", fontWeight: "bold" }}>
                Experience
              </h2>
              <ul>
                <li>
                  <img
                    src={require("../images/calendar.png")}
                    class="gambar-kalendar"
                  />{" "}
                  2018 - 2020 <br />
                  <span class="bold-huruf"> Freelance Ruangguru </span>
                </li>
                <br />
                <li>
                  <img
                    src={require("../images/calendar.png")}
                    class="gambar-kalendar"
                  />{" "}
                  2016 - 2018 <br />
                  <span class="bold-huruf"> Guru Bimbel MIPA Plus </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Team;
