import Link from "next/link";
import React, { useEffect, useState } from "react";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
}

const Navbar = () => {
  const scrollDirection = useScrollDirection();

  return (
    <nav
      className={`sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } px-8  bg-black  w-full text-white m-auto h-12  md:bg-white md:text-black z-10 `}
    >
      <ul className=" flex  uppercase items-center justify-center md:border-b md:border-b-black md:max-w-[68rem] md:mx-auto">
        <li className=" py-4 px-2 text-xs tracking-widest">
          <Link href="/artists">Artists</Link>
        </li>
        <li className=" py-4 px-2 text-xs tracking-widest">
          <Link href="/digital">Digital </Link>
        </li>
        <li className=" py-4 px-2 text-xs tracking-widest">
          <Link href="/creative">Creative </Link>
        </li>
        <li className=" py-4 px-2 text-xs tracking-widest">
          <Link href="/">PREMIER MODELS</Link>
        </li>
        <li className=" py-4 px-2 text-xs tracking-widest">
          <Link href="/">About us</Link>
        </li>
        <li className=" py-4 px-2  text-xs tracking-widest">
          <Link href="/"> Social</Link>
        </li>
      </ul>
      <div className=" h-9"></div>
    </nav>
  );
};

export default Navbar;
