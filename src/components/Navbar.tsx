import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router";
import { useCart } from "../context/cartContext";

function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  const goToCart = () => {
    navigate('cart');
  };
  const goToHome = () => {
    navigate('/');
  }

  return (
    <nav className="fixed top-0 left-0 w-full flex bg-secondary text-white font-semibold justify-between px-5 md:px-20 py-3">
      <h1 className="cursor-pointer" onClick={goToHome}> Timbu Cloud Shop</h1>
      <div className="flex items-center gap-2 cursor-pointer hover:text-primary" onClick={goToCart}>
        <h2 className="hidden md:block">
          Cart({totalItems})
        </h2>
        <MdOutlineShoppingCart className="text-2xl md:text-xl"/>
        <h2 className="md:hidden">
          ({totalItems})
        </h2>
      </div>
    </nav>
  );
}

export default Navbar;