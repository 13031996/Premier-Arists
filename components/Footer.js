import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" px-8 pt-8 md:max-w-[68rem] md:mx-auto">
      <div className=" text-[0.65em] py-4 border-t border-t-black text-center">
        © 1981-2023 Premier Models
        <Link className=" pl-4" href="/">
          MEDIASLIDE MODEL AGENCY SOFTWARE
        </Link>
        <Link className=" pl-4" href="/">
          TERMS AND CONDITIONS
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
