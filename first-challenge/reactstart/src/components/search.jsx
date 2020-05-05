import React, { Component } from "react";

const Search = (props) => {
  return (
    <div>
      <form class="form-inline">
        <input
          class="form-control "
          type="search"
          placeholder={props.placeholder}
          onChange={props.doSearch}
          value={props.keyword}
          aria-label="Search"
        />
        <button class="btn btn-outline-dark" type="submit">
          <i class="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default Search;
// tambahan react_even_router
