
import React from 'react';
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src ="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/fdb8beab-7d14-45bb-b06e-402c16dc3d4d.jpg"></img>
          </div>
          <div>
            <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/8e4dada6-b69a-43f0-9418-07cd778835d7.jpg"></img>
          </div>
          <div>
            <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/a2aa15c9-21b1-4566-9566-7a0e9da40745.jpg"></img>
          </div>
          <div>
            <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/1571711b-a965-49dc-a622-10a6fd08aba9.jpg"></img>
          </div>
          <div>
            <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/f6fd81da-a774-4e8d-b96c-5f2c430fb715.jpg"></img>
          </div>
          <div>
            <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/9c3fb797-0e4f-4380-8650-9b0d88dee3d9.jpg"></img>
          </div>
        </Slider>
      </div>
    );
  }
}

/*function Headerimg() {
 
  return (
    <div className="slide">
      
        <div>
          <img src="https://product-image.kurly.com/cdn-cgi/image/format=auto/banner/main/pc/img/d005fcce-922a-4e8b-8fa6-a0dd03d593ea.jpg" alt="" />
        </div>
      </div>
  );
}

export  default Headerimg;*/
