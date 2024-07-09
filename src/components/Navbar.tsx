import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

function Navbar() {
  return (
    <nav className="flex bg-secondary text-white font-semibold justify-between px-20 py-3">
      <h1 className="cursor-pointer"> Timbu Cloud Shop</h1>
      <div className="flex items-center gap-2 cursor-pointer hover:text-primary">
        <h2>
          Cart(<span>0</span>)
        </h2>
        <MdOutlineShoppingCart className="text-xl"/>
      </div>
    </nav>
  );
}

export default Navbar;
