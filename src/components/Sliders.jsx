import React from "react";
import Slider from "react-slick";
import weather from "../assets/images/weather.png";
import article from "../assets/images/article.png";
import bmw from "../assets/images/bmw.png";
import service from "../assets/images/service.png";
import gym from "../assets/images/gym.png";

const Sliders = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="px-5">
      {[weather, article, bmw, gym, service].map((item, index) => (
        <div key={index}>
          <div className="bg-[#D9D9D9] h-52 w-52">
            <h3 className="font-bold text-sm py-2 ml-2">Web Application</h3>
            <img src={item} alt="Application Screenshot" className="mb-2" />
            <a
              href="#"
              className="flex bg-[#124C81] mx-5 p-1 text-white justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Link
            </a>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Sliders;
