import React, { Component } from "react";

const NewsFeed = (props) => {
  const { url, title, urlToImage, description, publishedAt } = props;
  return (
    <div class="card mb-5">
      <img src={urlToImage} class="card-img-top" alt="..." />
      <div class="card-body text-left">
        <h5 class="card-title float-left">
          {" "}
          <a href={url}>{title} </a>
        </h5>
        <p class="card-text float-left">{description}</p>
        <small class="text-muted float-left">{publishedAt}</small>
      </div>
      <div class="card-footer">
        <i class="far fa-heart float-left"></i>
        <i class="fa fa-share-alt"></i>
        <i class="far fa-thumbs-down float-right"></i>
      </div>
    </div>
  );
};

export default NewsFeed;
