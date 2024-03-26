import React from "react";
import "./Featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>freelance</span> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./images/search.png" alt="" />
              <input type="text" placeholder='Try "building Web app"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <button>Design</button>
            <button>Music</button>
            <button>Writing</button>
            <button>Marketing</button>
          </div>
        </div>

        <div className="right">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
