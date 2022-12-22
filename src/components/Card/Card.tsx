import axios from "axios";
import React, { useEffect, useState } from "react";

type FeaturedProps = {
  title: string;
  description: string;
  fashionData: Array<any> | never;
};

export default function Card(props: FeaturedProps) {
  const { title, description, fashionData } = props;
  const text = title.split(" ");
  let toUppercase;
  for (let i = 0; i <= title.length; i++) {
    if (text[i] !== undefined) {
      text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
      toUppercase = text.join(" ");
    }
  }
  return (
    <>
      <div className="featuredContainer">
        <div className="textContainer">
          <h3>{toUppercase}</h3>
        </div>
        <div className="textContainer">
          <span>{description}</span>
        </div>
      </div>

      <div className="featuredImagesContainer">
        <div className="featuredImages">
          <>
            {fashionData.map((item, index) => {
              let random = Math.floor(Math.random() * 20);
              if (index < 4) {
                // <img src="https://via.placeholder.com/200x300" alt="" />;
                return (
                  <>
                    {item.rating.rate >= 4 ? (
                      <>
                        <span className="top-rated">Top rated!</span>
                        <img
                          key={`${item + index}`}
                          src={fashionData[random].image}
                          alt=""
                        />
                      </>
                    ) : (
                      <img
                        key={`${item + index}`}
                        src={fashionData[random].image}
                        alt=""
                      />
                    )}
                  </>
                );
              }
            })}
            {/* <img src="https://via.placeholder.com/200x300" alt="" />
            <img src="https://via.placeholder.com/200x300" alt="" /> */}
          </>
        </div>
      </div>
    </>
  );
}
