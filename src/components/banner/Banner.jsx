import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <img src="./images/bg-signup.webp" alt="" />
        <span>
          Suddenly it's all so <i>doable</i>
        </span>
        <button>Join Us</button>
      </div>
    </div>
  );
};

export default Banner;
