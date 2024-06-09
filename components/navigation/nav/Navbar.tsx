"use client";
import Link from "next/link";
import React, { FC, useState } from "react";

const Navbar: FC = () => {
  const [isOpen, setIsopen] = useState<boolean>(false);
  return (
    <nav
      className="bg-primary-background text-primary-foreground p-4 sm:p-6 md:justify-between
    md:items-center"
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="" className="text-2xl font-bold">
          MJ
        </a>
        <div className="hidden md:flex">
          <Link href="/" className="mx-2 hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="mx-2 hover:text-gray-300">
            About
          </Link>
          <Link href="/contact" className="mx-2 hover:text-gray-300">
            Contact
          </Link>
        </div>
        <div className="md:hidden items-center">
          <button onClick={() => setIsopen(!isOpen)}></button>
        </div>
      </div>
      {/* <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Experience</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Stage</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Contact</a>
          </Link>
        </li>
      </ul> */}
    </nav>
  );
};

export default Navbar;
