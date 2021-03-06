import React from "react";
import Slider from "react-slick";

export default function Types({ typeList, setName }) {
  const settings = {
    dots: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  };
  return (
    <div className="types">
      <Slider {...settings}>
        {typeList.map((p, i) => (
          <div key={i}>
            <img
              src={p.photo}
              onClick={() => {
                setName(p.name);
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
