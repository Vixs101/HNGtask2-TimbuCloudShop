import React, { useEffect, useState } from "react";
import { Product, checkoutItems, products } from "../utils/utils";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useCart } from "../context/cartContext";
import { getProducts } from "../services/timbuApi";
import { MdOutlineShoppingCart } from "react-icons/md";

function Cart() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);

  const {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const goToCheckout = () => {
    navigate("checkout", { state: { subtotal: calculateSubtotal() } });
  };

  const goToHome = () => {
    navigate("/");
  };

  const calculateSubtotal = () => {
    return cart.reduce(
      (total, item) =>
        total + item.product.current_price[0].NGN[0] * item.quantity,
      0
    );
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts(page, 3);
        setProducts(response.data.items);
      } catch (error) {
        console.log("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, [page]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <section className="px-5 pb-5 pt-14 md:px-20 md:pb-10 md:pt-20 h-full w-full">
        <div className="flex justify-between items-end">
          <h1 className="text-lg md:text-3xl font-semibold text-primary">
            Subtotal ${calculateSubtotal()}
          </h1>
          <button
            className="text-white bg-primary hover:bg-[#8c552f] flex items-center justify-center text-lg md:text-2xl font-semibold h-10 p-2 md:p-0 md:w-2/12  rounded-xl"
            onClick={goToCheckout}
          >
            Checkout
          </button>
        </div>
        {totalItems == 0 && (
          <h1 className="text-xl md:text-2xl text-primary text-center mt-10 ">
            You haven't Added any Item to your Cart!
          </h1>
        )}
        {cart.map((item) => (
          <>
            <div
              key={item.product.id}
              className="flex bg-primary text-white mt-3 md:mt-10 p-2 md:py-10 md:px-5 rounded-2xl justify-between md:justify-normal md:gap-20  md:h-auto items-center md:items-start"
            >
              <div className="flex gap-2 md:gap-5 lg:gap-12 w-3/4 h-3/4  md:w-4/5">
                <img
                  src={`https://api.timbu.cloud/images/${item.product.photos[0].url}`}
                  alt={item.product.name}
                  className="w-1/3 lg:w-52 h-28 md:h-52 lg:h-40 rounded-xl object-cover"
                />
                <div className="flex flex-col gap-2 md:gap-5 w-11/12 md:w-1/2 font-semibold">
                  <h3 className="text-sm md:text-3xl ">{item.product.name}</h3>
                  <p className="text-xs md:text-xl font-normal md:font-semibold">
                    {item.product.description}
                  </p>
                </div>
              </div>
              <div className=" flex flex-col items-center gap-1 md:gap-5">
                <h3 className="text-sm md:text-2xl lg:text-3xl">
                  ${item.product.current_price[0].NGN[0]}
                </h3>
                <h3 className="font-semibold text-sm md:text-2xl lg:text-3xl">
                  Quantity
                </h3>
                <div className="flex justify-between  gap-3">
                  <button
                    className="text-primary bg-white hover:bg-[#e9e3de] flex items-center justify-center text-sm md:text-2xl font-semibold h-4 md:h-10 p-2 md:p-5 rounded-xl"
                    onClick={() => decreaseQuantity(item.product.id)}
                  >
                    -
                  </button>
                  <h3 className="text-sm md:text-2xl">{item.quantity}</h3>
                  <button
                    className="text-primary bg-white hover:bg-[#e9e3de] flex items-center justify-center text-xs md:text-2xl font-semibold h-4 md:h-10 p-2 md:p-5 rounded-xl"
                    onClick={() => increaseQuantity(item.product.id)}
                  >
                    +
                  </button>
                </div>
                <FaRegTrashAlt
                  className="text-sm md:text-2xl cursor-pointer"
                  onClick={() => removeFromCart(item.product.id)}
                />
              </div>
            </div>
          </>
        ))}
      </section>

      {/* items */}
      <section className="p-5 md:px-20 md:pt-10 bg-[#F7F7F7]">
        <h2 className="text-center md:text-start text-xl md:text-2xl font-semibold bg-[#F7F7F7] p-2 w-full lg:w-1/6">
          Best Selling Items
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 h-full my-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white p-5 rounded-xl gap-5"
              style={{ maxHeight: "410px", minHeight: "235px" }}
            >
              <img
                src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                alt={product.name}
                className="h-2/3 object-cover"
              />

              <div className="flex justify-between border-t-gray-200 border-t pt-2">
                <div className="flex flex-col gap-2 text-sm md:text-2xl">
                  <h3 className="text-primary">{product.name}</h3>
                  <p>${product.current_price[0].NGN[0]}</p>
                </div>
                <button
                  className="flex items-center justify-center bg-primary hover:bg-[#8c552f] text-white text-2xl md:text-4xl rounded-xl md:p-2 h-10 md:h-auto w-1/4 md:w-1/5 self-center md:self-start"
                  onClick={() => addToCart(product)}
                >
                  <MdOutlineShoppingCart />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-20">
          <p className="text-sm md:text-base text-gray-300">
            Home\<span className="text-black">Cart</span>\Checkout
          </p>{" "}
          <button
            className="text-white bg-secondary hover:bg-tertiary flex items-center justify-center text-lg md:text-2xl font-semibold h-10 p-2 md:w-1/4 lg:w-2/12  rounded-xl"
            onClick={goToHome}
          >
            Back to Home
          </button>
        </div>
      </section>
      <footer className="flex bg-secondary text-white font-semibold justify-center px-5 md:px-20 py-3 md:mt-3">
        <h1 className="flex cursor-pointer self-center">
          {" "}
          2024 Copyright All Rights Reserved
        </h1>
      </footer>
    </>
  );
}

export default Cart;
