import React from "react";
import { checkoutItems, products } from "../utils/utils";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router";

function Cart() {
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('checkout');
  }

  const goToHome = () => {
    navigate('/');
  }

  return (
    <>
      <section className="p-5 md:px-20 md:py-10 h-full w-full">
        <div className="flex justify-between items-end border-b">
          <h1 className="text-lg md:text-3xl font-semibold text-primary">
            Subtotal $1950
          </h1>
          <button className="text-white bg-primary hover:bg-[#8c552f] flex items-center justify-center text-lg md:text-2xl font-semibold h-10 p-2 md:p-0 md:w-2/12  rounded-xl" onClick={goToCheckout}>
            Checkout
          </button>
        </div>
        {checkoutItems.map((items) => (
          <>
            <div
              key={items.id}
              className="flex bg-primary text-white mt-3 md:mt-10 p-2 md:py-10 md:px-5 rounded-2xl justify-between md:justify-normal md:gap-20  md:h-auto items-center md:items-start"
            >
              <div className="flex gap-2 md:gap-5 lg:gap-12 w-3/4 h-3/4  md:w-4/5">
                <img src={`/images/${items.pic}.png`} alt="Brown chair" className="w-1/2 lg:w-auto h-28 md:h-auto"/>
                <div className="flex flex-col gap-2 md:gap-5 w-11/12 md:w-1/2 font-semibold">
                  <h3 className="text-sm md:text-3xl ">{items.title}</h3>
                  <p className="text-xs md:text-xl">{items.text}</p>
                </div>
              </div>
              <div className=" flex flex-col items-center gap-2 md:gap-5">
                <h3 className="text-sm md:text-2xl lg:text-3xl">$650</h3>
                <h3 className="font-semibold text-sm md:text-2xl lg:text-3xl">Quantity</h3>
                <div className="flex justify-between  gap-3">
                  <button className="text-primary bg-white hover:bg-[#e9e3de] flex items-center justify-center text-sm md:text-2xl font-semibold h-5 md:h-10 p-1 md:p-5 rounded-xl">
                    -
                  </button>
                  <h3 className="text-sm md:text-2xl">1</h3>
                  <button className="text-primary bg-white hover:bg-[#e9e3de] flex items-center justify-center text-xs md:text-2xl font-semibold h-5 md:h-10 p-1 md:p-5 rounded-xl">
                    +
                  </button>
                </div>
                <FaRegTrashAlt className="text-sm md:text-2xl cursor-pointer" />
              </div>
            </div>
          </>
        ))}
      </section>
      <section className="p-5 md:px-20 md:pt-10 bg-[#F7F7F7]">
        <h2 className="text-center md:text-start text-xl md:text-2xl font-semibold bg-[#F7F7F7] p-2 w-full lg:w-1/6">
          Best Selling Items
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 h-full my-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white p-5 rounded-xl gap-5"
            >
              <img src={`/images/${product.pic}.png`} alt={product.alt} />

              <div className="flex justify-between border-t-gray-200 border-t pt-2">
                <div className="flex flex-col gap-2 text-xl md:text-2xl">
                  <h3 className="text-primary">{product.title}</h3>
                  <p>{product.price}</p>
                </div>
                <button className="flex items-center justify-center bg-primary hover:bg-[#8c552f] text-white text-2xl md:text-4xl rounded-xl md:p-2 w-1/5">
                  {product.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-20">
          <p className="text-sm md:text-base text-gray-300">
            Home\<span className="text-black">Cart</span>\Checkout
          </p>{" "}
          <button className="text-white bg-secondary hover:bg-tertiary flex items-center justify-center text-lg md:text-2xl font-semibold h-10 p-2 md:w-1/4 lg:w-2/12  rounded-xl" onClick={goToHome}>
            Back to Home
          </button>
        </div>
      </section>
      <footer className="flex bg-secondary text-white font-semibold justify-center px-5 md:px-20 py-3 md:mt-3">
      <h1 className="flex cursor-pointer self-center"> 2024 Copyright All Rights Reserved</h1>
    </footer>
    </>
  );
}

export default Cart;
