import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <form class="form-inline">
          <input
            class="form-control "
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-dark" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
