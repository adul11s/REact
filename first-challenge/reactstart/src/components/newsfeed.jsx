import React, { Component } from "react";

class NewsFeed extends Component {
  render() {
    return (
      <div class="card">
        <img
          src={require("../images/news-picture.jpg")}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title float-left">
            Nikahi Rakyat Jelata, Putri Ayako dari Jepang Lepaskan Gelar
            Kerajaan
          </h5>
          <p class="card-text float-left">
            Pernikahan Putri Ayako dan Kei Moriya dilangsungkan lewat upacara
            tradisional Jepang.
          </p>
          <small class="text-muted float-left">Last updated 3 mins ago</small>
        </div>
        <div class="card-footer">
          <i class="far fa-heart float-left"></i>
          <i class="fa fa-share-alt"></i>
          <i class="far fa-thumbs-down float-right"></i>
        </div>
      </div>
    );
  }
}

export default NewsFeed;
