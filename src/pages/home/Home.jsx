import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slider/Slide";
import { cards } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import Banner from "../../components/banner/Banner";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={3} arrowsScroll={3}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>

      {/* Features Section */}

      <div className="features">
        <div className="container">
          <div className="left-item">
            <h1>A Whole world of Freelance Talent at Your Fingertips!</h1>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Suitable For Every Budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>

            <div className="title">
              <img src="./images/check.png" alt="" />
              Suitable For Every Budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>

            <div className="title">
              <img src="./images/check.png" alt="" />
              Suitable For Every Budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>

            <div className="title">
              <img src="./images/check.png" alt="" />
              Suitable For Every Budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="right-item">
            <video src="./imagaes/video.mp4" controls></video>
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="left-item">
            <h1>Fiverr Business</h1>
            <h2>A solution built for business</h2>
            <p>Upgrade to a curated experience to access vetted talent</p>

            <div className="title">
              <img src="./images/check.png" alt="" />
              Talent matching
            </div>

            <div className="title">
              <img src="./images/check.png" alt="" />
              Dedicated account management
            </div>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Team collaboration tools
            </div>
            <div className="title">
              <img src="./images/check.png" alt="" />
              Business payment solutions
            </div>
            <button className="explore">Explore Fiverr Business</button>
          </div>
          {/* <div className="right-item">
            <img src="./images/business.webp" alt="" />
        </div> */}
        </div>
      </div>

      <Banner />
    </div>
  );
};

export default Home;
