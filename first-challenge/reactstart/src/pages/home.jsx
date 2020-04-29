import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

class Home extends Component {
  render() {
    const fRight = { float: "right" };
    return (
      <div>
        {/* header */}
        <Header />
        {/* home alta */}
        <div className="container-fluid">
          <div className="row home-alta">
            <div className="col-lg-6 ">
              <img
                src={require("../images/Group_16136@2x@2x.png")}
                className="img-fluid"
                alt="HomeAlta"
              />
            </div>
            <div className="col-lg-5 col-sm-10 justify-content-center">
              <h2>HI THERE!</h2>
              <h3>
                We are an <span>Alterra Academy.</span>
              </h3>
              <p>
                Alterra Academy Full-stack Program is Coding Bootcamp which
                transform you being professional Software Engineer within 3
                months.
              </p>
              <a href="./team.html" className="btn btn-warning">
                <img
                  src={require("../images/sport-team.png")}
                  className="img-more"
                  alt="gambar sport"
                />
                <img
                  src={require("../images/sport-team-hover.png")}
                  className="img-more-after"
                  alt="sport hover"
                />
                More About Team
              </a>
            </div>
          </div>
        </div>
        {/* end home alta */}
        {/* container capsule */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 info-panel">
              <div className="row text-kapsul">
                <div className="col-lg  bd-kapsul">
                  <img
                    src={require("../images/reward.png")}
                    alt="Reward"
                    className="float-left"
                  />
                  <h4>4 Years Job</h4>
                  <p>Experience</p>
                </div>
                <div className="col-lg bd-kapsul">
                  <img
                    src={require("../images/project.png")}
                    alt="Project"
                    className="float-left"
                  />
                  <h4>500+ Projects</h4>
                  <p>Completed</p>
                </div>
                <div className="col-lg ">
                  <img
                    src={require("../images/support.png")}
                    alt="Support"
                    className="float-left"
                  />
                  <h4>Support</h4>
                  <p>Online 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end container capsule */}

        {/* about */}
        <div className="container">
          <div className="row" id="about">
            <p className="col-lg-12">
              &mdash;<span> About </span> &mdash;
            </p>
          </div>
        </div>

        <div className="jumbotron jumbotron-fluid jumbo">
          <div className="container">
            <h1 className="display-4">Alterra is For Everyone</h1>
            <p className="lead">
              As a brandnew Catalyst, we are aiming to become one of the best
              tech companies in Indonesia. Joining the tech industry in
              Indonesia since 2015 under the name of Sepulsa, we have evolved as
              a B2B tech company in 4 years providing various services such as
              Bill Payment Aggregator, Distribution Network, Promotion Platform,
              and Tech Academy.
            </p>
          </div>
        </div>
        {/* end about */}

        {/* meet our team */}
        <div class="container">
          <div class="row" id="about">
            <img
              src={require("../images/ornament_batik.png")}
              style={{
                width: "200px",
                height: "291px",
                marginBottom: "-220px",
                float: "left",
              }}
            />
            <p class="col-lg-12">
              &mdash;<span> Meet Our Team </span>&mdash;
            </p>
          </div>
          <div>
            <p
              class="font-weight-bold text-center m-0"
              style={{ paddingBottom: "90px" }}
            >
              Our Team Consists Only of the Best Talents
            </p>
          </div>
        </div>
        {/* gambar meet our team */}
        <div class="container">
          <div class="row teams">
            <div class="col-lg-10 offset-lg-1 col-10 offset-1 col-sm-12">
              <div class="row">
                <div class="col-lg-4 col-sm-12">
                  <div class="gambar-dan-teks img-fluid">
                    <div class="border-gambar img-fluid">
                      <img
                        src={require("../images/shutterstock_796346011@2x.png")}
                        class="figure-img img-fluid"
                        alt="Blog1"
                      />
                    </div>
                    <h3>Abdullah Romli</h3>
                    <span>Backend Development</span>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-12">
                  <div class="gambar-dan-teks img-fluid">
                    <div class="border-gambar-blue img-fluid">
                      <img
                        src={require("../images/shutterstock_796346011@2x.png")}
                        class="figure-img img-fluid"
                        alt="Blog1"
                      />
                    </div>
                    <h3>Rosliani Widia</h3>
                    <span>Backend Development</span>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-12">
                  <div class="gambar-dan-teks img-fluid">
                    <div class="border-gambar img-fluid">
                      <img
                        src={require("../images/shutterstock_796346011@2x.png")}
                        class="figure-img img-fluid"
                        alt="Blog1"
                      />
                    </div>
                    <h3>Aulia Rahmani</h3>
                    <span>Backend Development</span>
                    <br />
                    <a href="./team.html" style={{ float: "right" }}>
                      Check Now &#x2192;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* gambar meet our team */}

        {/* latest blog */}
        <div class="container" style={{ paddingTop: "30px" }}>
          <div class="row" id="about">
            <p class="col-lg-12 text-center">
              &mdash;<span> Latest Blogs </span>&mdash;
            </p>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
              <div class="row justify-content-center kepsyen">
                <div class="col-md-4  d-flex">
                  <figure class="figure">
                    <img
                      src={require("../images/img_article.jpg")}
                      class="figure-img img-fluid rounded"
                      alt="Blog1"
                    />
                    <figcaption class="figure-caption">
                      <h3>CREATE A WORDPRESS THEME FROM SCRATCH</h3>
                      <span>Larry Stark</span>
                      <span style={fRight}>7 Januari 2020</span>
                      <p>
                        Quick six blind smart out burst. Perfectly on furniture
                        dejection determine my depending an to. Add short water
                        court fat…
                      </p>
                      <a href="./blog.html" style={fRight}>
                        <u>Read More</u>
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div class="col-md-4  d-flex tengah">
                  <figure class="figure">
                    <img
                      src={require("../images/img_article.jpg")}
                      class="figure-img img-fluid rounded"
                      alt="Blog1"
                    />
                    <figcaption class="figure-caption">
                      <h3>CREATE A WORDPRESS THEME FROM SCRATCH</h3>
                      <span>Larry Stark</span>
                      <span style={fRight}>7 Januari 2020</span>
                      <p>
                        Quick six blind smart out burst. Perfectly on furniture
                        dejection determine my depending an to. Add short water
                        court fat…
                      </p>
                      <a href="./blog.html" style={fRight}>
                        <u>Read More</u>
                      </a>
                    </figcaption>
                  </figure>
                </div>
                <div class="col-md-4  d-flex">
                  <figure class="figure">
                    <img
                      src={require("../images/img_article.jpg")}
                      class="figure-img img-fluid rounded"
                      alt="Blog1"
                    />
                    <figcaption class="figure-caption">
                      <h3>CREATE A WORDPRESS THEME FROM SCRATCH</h3>
                      <span>Larry Stark</span>
                      <span style={fRight}>7 Januari 2020</span>
                      <p>
                        Quick six blind smart out burst. Perfectly on furniture
                        dejection determine my depending an to. Add short water
                        court fat…
                      </p>
                      <a href="./blog.html" style={fRight}>
                        <u>Read More</u>
                      </a>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <Footer />
        {/* end footer */}
      </div>
    );
  }
}

export default Home;
