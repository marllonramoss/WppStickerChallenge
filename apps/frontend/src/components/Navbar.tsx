import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="absolute top-10 w-full  flex bg-transparent justify-center items-center">
      <div className="bg-zinc-200 text-black rounded-2xl flex py-2 px-4 h-14 justify-center items-center ">
        <Link
          href={"/community"}
          className="cursor-pointer border-r border-zinc-400 w-full h-full pr-4 items-center flex justify-center"
        >
          Community
        </Link>
        <Link
          href={"/mystickers"}
          className="cursor-pointer px-4 border-r border-zinc-400 w-full h-full  items-center flex justify-center text-center "
        >
          My Stickers
        </Link>
        <Link
          href={"#"}
          className="cursor-pointer pl-4 w-full h-full  items-center flex justify-center"
        >
          Help
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
