"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const Links = [
    { name: "Home", link: "/" },
    { name: "Guidance", link: "/info" },
    { name: "Chatbot", link: "/success/[id]" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-white w-full top-0 left-0 z-50 fixed py-3 px-7 shadow-md">
        <div className="flex items-center justify-between py-3 px-10 w-full">
          <div className="">
            <p>
              <a
                className="text-2xl text-blue-500 font-semibold cursor-pointer"
                href="/"
              >
                StoreScopeAI
              </a>
            </p>
          </div>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-8 text-3xl top-5 cursor-pointer md:hidden"
          >
            {isOpen === true ? <IoClose /> : <FiMenu />}
          </div>

          <div>
            <ul
              className={`md:flex md:items-center md:pb-0 pb-5 md:z-auto z-40 transition-all duration-500 ease-in-out md:space-x-16 text-black text-lg md:pl-0 py-10 md:py-0 md:space-y-0 space-y-7 w-full md:w-auto absolute left-0 bg-white md:static ${
                isOpen
                  ? "top-20 opacity-100"
                  : "top-[-490px] z-[-1] opacity-0 md:opacity-100"
              }`}
            >
              {Links.map((lk, index: number) => (
                <li key={index}>
                  <a
                    href={lk.link}
                    className="hover:text-blue-500 transition-all duration-500 md:mx-auto mx-16"
                  >
                    {lk.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
