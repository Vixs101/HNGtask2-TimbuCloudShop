import React from "react";
import Navbar from "../components/Navbar";
import { LuPhone } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { productImage } from "../utils/utils";

function Homepage() {
  return (
    <>
      <Navbar />
      {/* hero section */}
      <section className="flex p-20 justify-between bg-primary text-white w-full items-center h-full">
        <div className="flex flex-col w-2/5 h-4/5 gap-5">
          <h1 className="heroText text-5xl font-semibold">
            Flash sales on all <span className="lg:br"></span> Sofa Series
          </h1>
          <p className="font-semibold">
            Locate the ideal chair for your workstation: Comfortable, ergonomic,
            and optimized for your productivity
          </p>
          <button className="bg-secondary flex items-center justify-center h-11 w-1/3 rounded-3xl hover:bg-tertiary">
            Shop Now
          </button>
        </div>
        <img src="/images/heroImage.png" alt="heroImage" />
      </section>

      {/* items */}
      <section className="bg-[#F7F7F7] p-20">
        <h2 className="text-2xl font-semibold">Best Selling Items</h2>
        <div className="grid grid-cols-3 gap-10 h-full mt-5">
          {productImage.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white p-5 rounded-xl gap-5"
            >
              <img
                src={`/images/${product.pic}.png`}
                alt={product.alt}
                className="h-5/6"
              />
              <div className="flex justify-between border-t-gray-200 border-t pt-2">
                <div className="flex flex-col gap-2 text-2xl">
                  <h3 className="text-primary text-2xl">{product.title}</h3>
                  <p>{product.price}</p>
                </div>
                <button className="flex items-center justify-center bg-primary text-white text-4xl rounded-xl p-2 w-1/5">
                  {product.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* footer */}
      <section className="flex flex-col items-center px-20 pt-20 pb-5 bg-primary text-white text-center w-full gap-16">
        <div className="flex flex-col w-1/2 gap-4">
          <h1 className="text-6xl font-semibold ">Timbu Cloud Shop</h1>
          <p className="font-semibold">
            Locate the ideal chair for your workstation: Comfortable,
            <span className="lg:br"></span> ergonomic, and optimized for your
            productivity
          </p>
        </div>

        <div className="flex justify-between w-3/4">
          <div className="flex gap-3">
            <span className="bg-[#D9D9D9] p-4 rounded-full">
              <LuPhone className="text-black text-lg"/>
            </span>
            <span>
              <p>+90 365 784 66</p>
              <p>+90 365 784 66</p>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="bg-[#D9D9D9] p-4 rounded-full">
              <FaRegEnvelope className="text-black text-lg"/>
            </span>
            <span>
              <p>Immalex02@gmail.com</p>
              <p>Immalex02@gmail.com</p>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="bg-[#D9D9D9] p-4 rounded-full">
              <IoMdHome className="text-black text-lg"/>
            </span>
            <span>
              <p>Lagos, Nigeria</p>
            </span>
          </div>
        </div>
        <p>2024 Copyright All Rights Reserved</p>
      </section>
    </>
  );
}

export default Homepage;
