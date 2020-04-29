import React, { Component } from "react";
import Navbar from "../components/navbar";
import LatestNews from "../components/latesnews";
import NewsFeed from "../components/newsfeed";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div class="container">
          <div class="row my-5">
            <div class="col-4">
              <LatestNews />
            </div>
            <div class="col-8">
              <NewsFeed />
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default Home;
