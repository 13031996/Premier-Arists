import React from "react";

const Card = ({ img }) => {
  return (
    <div className=" px-[10px] max-h-[70vh] text-center max-w[870px] mx-auto">
      <div>
        <img className=" max-h-[70vh] inline mx-auto" src={img} alt="dp" />
      </div>
    </div>
  );
};

export default Card;
