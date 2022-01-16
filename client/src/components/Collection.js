import React from "react";
import Card from "./Card";
import Slider from "react-slick";

export default function Collection({ collection, getTypeList, addOrDelete }) {
  const settings = {
    dots: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="collection">
      <Slider {...settings}>
        {collection.map((pokemon, index) => {
          return (
            <div key={index}>
              <Card
                pokemon={pokemon}
                getTypeList={getTypeList}
                collection={collection}
                addOrDelete={addOrDelete}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
