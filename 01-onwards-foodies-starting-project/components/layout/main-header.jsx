import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import HeaderBackground from "./header-background";

const MainHeader = () => {
  return (
    <>
      <HeaderBackground />
      <header className="flex items-center justify-around p-4 text-amber-100">
        <Link href={"/"} className="flex items-center gap-4 text-2xl font-bold">
          <Image src={logo} alt={"Logo"} className="w-24 " />
          NEXTLEVEL FOOD
        </Link>

        <nav>
          <ul className="flex gap-10 items-center text-lg font-medium">
            <li>
              <Link href={"/meals"}>Meals</Link>
            </li>
            <li>
              <Link href={"/community"}>Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
