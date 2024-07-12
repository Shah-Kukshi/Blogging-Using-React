import React from 'react';
import "../assets/css/style.css"; // Adjust the path as per your project structure

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="input-wrapper">
      <input
            type="text"
            class="inputSearch"
            id="SearchInput"
            placeholder="Search"
            name="Search"
        />
        <button className="search-btn" aria-label="Submit search">
          <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
        </button>
      </div>
      <p className="search-bar-text">Please enter at least 3 characters</p>
    </div>
  );
};

export default SearchBar;
