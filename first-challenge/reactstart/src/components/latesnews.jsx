import React, { Component } from "react";

class LatestNews extends Component {
  render() {
    return (
      <div class="card">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            {" "}
            <strong class="float-left">BERITA TERKINI</strong>
            <span class="float-right">lihat semua</span>
          </li>
          <li class="list-group-item">
            <span class="badge badge-danger float-left">#1</span> <br />
            <span class="float-left">Gabung Alphatech Academy Sekarang!</span>
          </li>
          <li class="list-group-item">
            <span class="badge badge-danger float-left">#2</span> <br />
            <span class="float-left">Ada apa antara Kobar dan Hasan?</span>
          </li>
          <li class="list-group-item">
            <span class="badge badge-danger float-left">#3</span> <br />
            <span class="float-left">Mengenal Arafat sang Master Python</span>
          </li>
          <li class="list-group-item">
            <span class="badge badge-danger float-left">#4</span> <br />
            <span class="float-left">
              Belahjar reactJs itu seru. Kamu setuju?
            </span>
          </li>
          <li class="list-group-item">
            <span class="badge badge-danger float-left">#5</span> <br />
            <span class="float-left">Sudahkah kamu sehat mental?</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default LatestNews;
