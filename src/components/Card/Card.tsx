import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type FeaturedProps = {
  title: string;
  description: string;
  fashionData: Array<any> | never;
  catId: number;
  priceRange: number;
  sortBy: string;
  loading: boolean;
  error: boolean;
};

export default function Card(props: FeaturedProps) {
  const { title, description, fashionData } = props;
  const [sourceImg, setSourceImg] = useState(false);
  const text = title.split(" ");
  let toUppercase;
  for (let i = 0; i <= title.length; i++) {
    if (text[i] !== undefined) {
      text[i] = text[i].charAt(0).toUpperCase() + text[i].slice(1);
      toUppercase = text.join(" ");
    }
  }

  const handleEnterImage = () => {
    setSourceImg(true);
  };

  const handleLeaveImage = () => {
    setSourceImg(false);
  };

  return (
    <>
      <div className="featuredContainer">
        <div className="featuredContainerWrapper">
          <div className="textContainer">
            <h3>{toUppercase}</h3>
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
                          <Link className="link" to={`/product/${item.id}`}>
                            <span className="topRated">Top rated!</span>
                            <div className="featuredImagesWrapper">
                              <div className="featuredImagesWrapperOnlyImage">
                                <img
                                  className="primaryImage"
                                  key={`${item + index}`}
                                  src={fashionData[random].image}
                                  alt=""
                                />
                                <img
                                  className="alternativeImage"
                                  key={`${item + index}-alternative`}
                                  src={"https://via.placeholder.com/200x300"}
                                  alt=""
                                />
                              </div>
                              <div className="itemInfoContainer">
                                <span className="itemTitle">{item.title}</span>
                                <div className="itemInfoContainerPrice">
                                  <span className="originalPrice">
                                    {item.price}
                                  </span>
                                  <span className="finalPrice">
                                    {item.price}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </>
                      ) : (
                        <Link className="link" to={`/product/${item.id}`}>
                          <div className="featuredImagesWrapper">
                            <div className="featuredImagesWrapperOnlyImage">
                              <img
                                className="primaryImage"
                                key={`${item + index}`}
                                src={fashionData[random].image}
                                alt=""
                              />
                              <img
                                className="alternativeImage"
                                key={`${item + index}`}
                                src={"https://via.placeholder.com/200x300"}
                                alt=""
                              />
                            </div>
                            <div className="itemInfoContainer">
                              <span className="itemTitle">{item.title}</span>
                              <div className="itemInfoContainerPrice">
                                <span className="originalPrice">
                                  {item.price}
                                </span>
                                <span className="finalPrice">{item.price}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
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
      </div>
    </>
  );
}
