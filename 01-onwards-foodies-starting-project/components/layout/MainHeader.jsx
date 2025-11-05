"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";
import HeaderBackground from "./HeaderBackground";
import { usePathname } from "next/navigation";
import NavLink from "../shared/NavLink";

const MainHeader = () => {
  const path = usePathname();
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
              <NavLink
                href={"/meals"}
                className={
                  path === "/meals" ? "text-amber-300 shadow-2xl " : ""
                }
              >
                Meals
              </NavLink>
            </li>
            <li>
              <NavLink
                href={"/community"}
                className={
                  path === "/community" ? "text-amber-300 shadow-2xl" : ""
                }
              >
                Community
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
