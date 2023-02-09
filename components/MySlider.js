import React, { useRef } from "react";
import Card from "./Card";
import Slider from "react-slick";

const data = [
  { img: "/images/ashu1.jpg" },
  { img: "/images/ashu2.jpg" },
  { img: "/images/ashu3.jpg" },
  { img: "/images/ashu4.jpg" },
  { img: "/images/ashu5.jpg" },
  { img: "/images/ashu6.jpg" },
  { img: "/images/ashu7.jpg" },
  { img: "/images/ashu8.jpg" },
  { img: "/images/ashu9.jpg" },
];

const MySlider = () => {
  const sliderRef = useRef(null);
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "progressive",
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative">
      <div className="absolute top-1/2 z-30 -translate-y-1/2 w-full flex justify-between px-10">
        <button
          className="bg-[url('/prev.svg')] block left-8 bg-no-repeat w-[50px] h-[100px]"
          onClick={() => {
            sliderRef?.current?.slickPrev();
          }}
        ></button>
        <button
          className="bg-[url('/next.svg')] block left-8 bg-no-repeat w-[50px] h-[100px] "
          onClick={() => {
            sliderRef?.current?.slickNext();
          }}
        ></button>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {data.map((el, index) => (
          <Card key={index} img={el.img} />
        ))}
      </Slider>
    </div>
  );
};

export default MySlider;
