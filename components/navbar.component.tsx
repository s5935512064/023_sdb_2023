"use client";

import React, { FC, useEffect, useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Transition, Dialog } from "@headlessui/react";
import { usePathname } from "next/navigation";
import LocaleSwitcher from "./locale-switcher";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const menu_en = [
  { id: 1, name: "Home", active: "/en", slug: "/en" },
  {
    id: 2,
    name: "About us",
    active: "/en/promotionevent",
    slug: "/en/promotionevent",
  },
  {
    id: 3,
    name: "Our Partner",
    active: "/en/residence",
    slug: "/en/residence",
  },
  { id: 4, name: "Gallery", active: "/en/directory", slug: "/en/directory" },
  { id: 5, name: "News", active: "/en/directory", slug: "/en/directory" },
  { id: 6, name: "Contact Us", active: "/en/contactus", slug: "/en/contactus" },
  {
    id: 7,
    name: "Information",
    active: "/en/contactus",
    slug: "/en/contactus",
  },
];

const Navbar: FC<Props> = (): JSX.Element => {
  const [navbarOffset, setNavbarOffset] = useState(false);
  const [navbarOffset2, setNavbarOffset2] = useState(true);

  const pathname = usePathname();
  const segments = pathname.split("/");

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    const navbar = document.querySelector("#navbar");
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      // if (prevScrollpos > currentScrollPos) {
      //     navbar.style.top = "0";

      // } else {
      //     navbar.style.top = "-64px";
      // }

      if (prevScrollpos >= currentScrollPos) {
        setNavbarOffset2(true);
      } else {
        setNavbarOffset2(false);
      }

      if (window.pageYOffset >= 20) {
        setNavbarOffset(true);
        // setTextColor("#000");
      } else {
        if (pathname == `/${segments[1]}` || segments.length == 4) {
          setNavbarOffset(false);
        }
        // setTextColor(colorText == "black" ? "#000" : "#FFF");
      }

      prevScrollpos = currentScrollPos;
    };
  });

  return (
    <>
      <div
        id="navbar"
        className={classNames(
          navbarOffset
            ? "bg-white backdrop-blur shadow "
            : "bg-transparent text-white",
          navbarOffset2 ? "top-0" : "-top-20",
          "w-full h-20 fixed  px-6 md:px-10 py-4 md:py-2 z-50 flex items-center justify-center "
        )}
      >
        <div className="w-36  h-full absolute  shrink-0 mt-1 left-10">
          {/* <Link href={`/${segments[1]}`}>
          </Link> */}
          <div className="w-full h-full relative">
            <Image
              src={navbarOffset ? "/assets/logo-c.webp" : "/assets/logo-w.webp"}
              alt="logo"
              priority
              unoptimized={true}
              width="0"
              height="0"
              sizes="100vw"
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
              className="w-full h-full"
            />
          </div>
        </div>

        <div>
          <ul className="flex items-center gap-7">
            {menu_en.map((item, index) => (
              <li key={index} className=" uppercase relative ">
                <a href="#" className="effect-underline">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute right-10 -mt-2">
          <LocaleSwitcher />
        </div>
      </div>
    </>
  );
};

export default Navbar;
