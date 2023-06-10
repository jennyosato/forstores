import React from "react";
import Link from "next/link";
import { BsCart, BsHeart, BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux/es/exports";

const Navbar = () => {
  const cartValue = useSelector(state => state.cart.quantity)
  return (
    <header className="shadow-md flex justify-evenly bg-gray-800 py-2 px-2 fixed w-full z-50">
      <nav className="">
        <ul className="flex py-2 px-4">
          <li>
            <Link
              className="hover:font-bold px-2 font-semibold text-white"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:font-bold px-2 font-semibold text-white"
              href="/stores"
            >
              Store
            </Link>
          </li>
          <li>
            <Link
              className="hover:font-bold px-2 font-semibold text-white"
              href="/cart"
            >
              About Us
            </Link>
          </li>
          
        </ul>
      </nav>
      <div className="text-4xl border-4 italic text-white ">ForStores</div>
      <div className="flex gap-4 font-bold items-center text-white">
        <BsSearch />
        <BsHeart />
        <div>
        <BsCart />
        <sup>{cartValue}</sup>
        </div>
       
        <Link
              className="hover:font-bold px-2 font-semibold text-white"
              href="/login"
            >
              Login{" "}
            </Link>
      </div>
    </header>
  );
};

export default Navbar;
