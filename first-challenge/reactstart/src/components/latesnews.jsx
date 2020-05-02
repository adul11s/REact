import React, { Component } from "react";

const LatestNews = (props) => {
  const { url, title, index } = props;
  return (
    <div class="card">
      <li class="list-group-item text-left">
        <span class="badge badge-danger ">#{index}</span> <br />
        <a href={url}>{title}</a>
      </li>
    </div>
  );
};

export default LatestNews;
