import React from "react";

import ModelList from "../components/ModelList";

const arr = [
  {
    id: 1,
    picture: "/images/image12.jpg",
    link: "/",
    name: "ADESUWA",
    followers: "123k",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat corrupti repellendus vero laborum!",
  },
  {
    id: 2,
    picture: "/images/image11.jpg",
    link: "/",
    name: "AKAN",
    followers: "122k",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat corrupti repellendus vero laborum!",
  },
  {
    id: 3,
    picture: "/images/image10.jpg",
    link: "/",
    name: "ARIANE FOURNIER",
    followers: "258k",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat corrupti repellendus vero laborum!",
  },
  {
    id: 4,
    picture: "/images/image9.jpg",
    link: "/",
    name: " BANKS",
    followers: "185k",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat corrupti repellendus vero laborum!",
  },
  {
    id: 5,
    picture: "/images/image8.jpg",
    link: "/",
    name: "BAR REFAELI",
    followers: "129k",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat corrupti repellendus vero laborum!",
  },
  {
    id: 6,
    picture: "/images/image7.jpg",
    link: "/",
    name: "DJ FAT TONY",
    followers: "125k",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat corrupti repellendus vero laborum!",
  },
  {
    id: 7,
    picture: "/images/image6.jpg",
    link: "/",
    name: "DYLAN PENN",
    followers: "129k",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat corrupti repellendus vero laborum!",
  },
  {
    id: 8,
    picture: "/images/image5.jpg",
    link: "/",
    name: "FEMI OYENIRAN",
    followers: "100k",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat corrupti repellendus vero laborum!",
  },
  {
    id: 9,
    picture: "/images/image4.jpg",
    link: "/",
    name: "GISELLE NORMAN",
    followers: "452k",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat corrupti repellendus vero laborum!",
  },
  {
    id: 10,
    picture: "/images/image3.jpg",
    link: "/",
    name: "HEADIE ONE",
    followers: "392k",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat corrupti repellendus vero laborum!",
  },
  {
    id: 11,
    picture: "/images/image2.jpg",
    link: "/",
    name: "  JULIA CUMMING",
    followers: "227k",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat corrupti repellendus vero laborum!",
  },
  {
    id: 12,
    picture: "/images/image1.jpg",
    link: "/",
    name: "KELIS",
    followers: "223k",
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat corrupti repellendus vero laborum!",
  },
];

const Creative = () => {
  return (
    <ModelList
      title={"Creative | Premier Artist"}
      category={"Creative"}
      modelList={arr}
    />
  );
};

export default Creative;
