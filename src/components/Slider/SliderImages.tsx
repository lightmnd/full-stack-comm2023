import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./SliderImages.scss";

type DataType = {
  loading: boolean;
  error: boolean;
};

export default function SliderImages({ loading, error }: DataType) {
  const [imageNo, setImageNo] = useState(0);

  const images = [
    "./img/slider/1.jpg",
    "./img/slider/2.jpg",
    "./img/slider/3.jpg",
  ];

  const setPrevImage = (idx: number) => {
    setImageNo(imageNo === 0 ? images.length - 1 : (prev) => prev - 1);
  };

  const setNextImage = (idx: number) => {
    setImageNo(imageNo === images.length - 1 ? 0 : (prev) => prev + 1);
  };

  return error ? (
    <p>"Ops! Something went wrong..."</p>
  ) : loading ? (
    <p>"loading..."</p>
  ) : (
    <div className="sliderContainer">
      <div
        className="imagesContainer"
        style={{ transform: `translateX(-${imageNo * 100}vw)` }}
      >
        {images.map((item, index) => {
          return (
            <img
              key={`${item + index}`}
              src={images[index]}
              alt=""
              className={"item"}
            />
          );
        })}
      </div>
      <div className="arrowContainer">
        <div className="arrowBack" onClick={() => setPrevImage(imageNo)}>
          <ArrowBackIosIcon />
        </div>
        <div className="arrowFwd" onClick={() => setNextImage(imageNo)}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
}
