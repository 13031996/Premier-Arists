// import Image from "next/image";
import Link from "next/link";
import React from "react";

const data = [
  {
    id: 1,
    image: "/model1.jpg",
    title: "ARTISTS",
    link: "/artists",
  },
  {
    id: 2,
    image: "/model2.jpeg",
    title: "DIGITAL",
    link: "/digital",
  },
  {
    id: 3,
    image: "/model3.jpg",
    title: "CREATIVE",
    link: "/creative",
  },
];

const Main = () => {
  return (
    <div className="relative">
      <header className=" pt-8 items-center justify-center mb-10">
        <div className="text-center ">
          <Link href="/">
            <div className=" bg-[url('/logo.svg')] w-[10.5em] h-[2.5em] bg-no-repeat bg-[50%] inline-block md:w-[35em] md:h-[10.8em]"></div>
            <section className=" px-8">
              <div className=" pt-[0.7rem] pb-4 md:pb-2 ">
                <h3 className=" text-[1.5em] tracking-[0.1em] font-normal md:text-6xl">
                  ARTISTS
                </h3>
              </div>
            </section>
          </Link>
        </div>
      </header>
      <section className=" my-0 mx-auto px-9 md:max-w-[68rem]">
        <div className=" grid grid-cols-1 text-center mx-[-16px] md:grid-cols-3">
          {data.map(({ id, link, image, title }) => {
            return (
              <article
                className="duration-75 hover:scale-110 hover:z-10 "
                key={id}
              >
                <Link href={link}>
                  <div className=" mb-10 md:mx-5  ">
                    <img className=" w-full" src={image} alt="image" />
                    <div className=" text-xl font-semibold mt-1 ">{title}</div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Main;
