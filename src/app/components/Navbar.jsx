"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Nav({ className }) {
  const pathname = usePathname();
  const [toggle, settoggle] = useState(false);
  const Toggle = () => {
    settoggle(!toggle);
  };

  return (
    <>
      <nav className="">
        <div
          className={`${className} flex flex-row md:justify-around z-50 bg-transparent p-5 absolute w-[100%]`}
        >
          <div className="self-center ">
            <Link href={"/"}>
              <img
                className="w-16"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Food_Network_Logo.svg/2085px-Food_Network_Logo.svg.png"
              />
            </Link>
          </div>
          <div className={`Navigation-menu  md:mt-[3.5vh]`}>
            <ul className={`flex-row flex font-medium gap-4 text-base`}>
              <li className="">
                <Link
                  className={`link ${
                    pathname === "/" ? "text-red-900" : ""
                  } hover:text-red-900`}
                  href="/"
                >
                  Home
                </Link>
              </li>

              <li className="">
                <Link
                  className={`link ${
                    pathname === "/menu" ? "text-red-800" : ""
                  } hover:text-red-800`}
                  href="/menu"
                >
                  Menu
                </Link>
              </li>
              <li className="">
                <Link
                  className={`link ${
                    pathname === "/about" ? "text-red-800" : ""
                  } hover:text-red-800`}
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li className="">
                <Link
                  className={`link ${
                    pathname === "/contact" ? "text-red-800" : ""
                  } hover:text-red-800`}
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="">
                {pathname == "/dashboard/admin" ||
                pathname == "/dashboard/admin/addProduct" ? (
                  <Link
                    className={`link ${
                      pathname === "/dashboard/admin" ? "text-red-800" : ""
                    } hover:text-red-800`}
                    href="/dashboard/admin"
                  >
                    Admin
                  </Link>
                ) : null}
              </li>
            </ul>
          </div>

          <div className="flex flex-row gap-5  items-center ld:order-1 sm:order-none md:order-1">
            <div className="w-6">
              <Link href={"/cart"}>
                <p className="text-black bg-slate-200 rounded-3xl absolute font-extrabold  px-2 sm:top-[7%] md:top-[15%] text-sm">
                  0
                </p>
                <ShoppingCartIcon className="text-black" fontSize="medium" />
              </Link>
            </div>

            <div className="md:block sm:hidden">
              <Link href={"/account/Login"}>
                <AccountCircleIcon className="text-black" fontSize="medium" />
              </Link>
            </div>
            {/* <div>
              <button onClick={Toggle} className="text-black Hamburger px-2 ">
                {toggle ? "X" : "Menu"}
              </button>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
