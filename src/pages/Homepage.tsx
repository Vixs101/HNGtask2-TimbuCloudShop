import React, { useEffect, useState } from "react";
import { useCart } from "../context/cartContext";
import { getProducts } from "../services/timbuApi";
import { LuPhone } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { Product } from "../utils/utils";
import Modal from "../components/Modal";
import { MdOutlineShoppingCart } from "react-icons/md";

function Homepage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        
        const response = await getProducts(page, 12);
        setProducts(response.data.items);

        setTotalPages(Math.ceil(response.data.total / 10));
      } catch (error) {
        console.log("Error fetching products: ", error);
      }
    };

    fetchProducts();

  }, [page]);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleShopNowClick = () => {
    const productSection = document.getElementById('product-section');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* hero section */}
      <section className="flex md:flex-row flex-col px-5 pb-5 pt-14 md:px-20 md:pt-28 md:pb-20 justify-between bg-primary text-white w-full items-center h-full gap-5 md:gap-6 lg:gap-0">
        <div className="flex flex-col items-center md:items-start text-center md:text-start lg:w-2/5 md:h-4/5 gap-5 w-full">
          <h1 className="md:heroText text-3xl md:lg:text-5xl font-semibold">
            Flash sales on all <span className="lg:br"></span> Sofa Series
          </h1>
          <p className="md:font-semibold">
            Locate the ideal chair for your workstation: Comfortable, ergonomic,
            and optimized for your productivity
          </p>
          <button className="bg-secondary flex items-center justify-center h-11 w-1/3 rounded-3xl hover:bg-tertiary"
          onClick={handleShopNowClick}>
            Shop Now
          </button>
        </div>
        <img
          src="/images/heroImage.png"
          alt="heroImage"
          className="md:w-1/2 lg:w-auto"
        />
      </section>

      {/* items */}
      <section id="product-section" className="bg-[#F7F7F7] p-5 md:p-20">
        <h2 className="text-center md:text-start text-xl md:text-2xl font-semibold">
          Best Selling Items
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 h-full mt-5">

          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white p-2 md:p-5 rounded-xl gap-5"
              style={{ maxHeight: "410px", minHeight: "235px" }}
              
            >
              <img
                src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                alt={product.name}
                className="h-2/3 object-cover"
                onClick={() => openModal(product)}
                title="Click for Description"
              />

              <div className="flex justify-between border-t-gray-200 border-t pt-2">
                <div className="flex flex-col gap-2 text-sm md:text-2xl" title="Click the Image for Description">
                  <h3 className="text-primary">{product.name}</h3>
                  <p>{`$${product.current_price[0].NGN[0]}`}</p>
                </div>
                <button
                  className="flex items-center justify-center bg-primary hover:bg-[#8c552f] text-white text-sm md:text-4xl rounded-xl md:p-2 h-10 md:h-auto w-1/4 md:w-1/6 self-center md:self-start"
                  onClick={() => addToCart(product)}
                >
                  <MdOutlineShoppingCart />
                </button>
              </div>
            </div>
          ))}
        </div>
        {page === totalPages && products.length === 0 && (
          <h1 className="text-center text-xl font-semibold text-primary">
            You are all caught up!
          </h1>
        )}
        {/* pagination */}
        <div className="flex gap-2 items-center justify-center  mt-5">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              className={
                page == index + 1 ? "text-xl font-semibold text-primary" : ""
              }
            >
              {index}
            </button>
          ))}
        </div>
      </section>

      {/* footer */}
      <footer className="flex flex-col items-center p-5 md:px-20 md:pt-20 md:pb-5 bg-primary text-white text-center w-full gap-10 md:gap-16">
        <div className="flex flex-col md:w-1/2 gap-4">
          <h1 className="text-3xl md:text-6xl font-semibold ">
            Timbu Cloud Shop
          </h1>
          <p className="md:font-semibold">
            Locate the ideal chair for your workstation: Comfortable,
            <span className="lg:br"></span> ergonomic, and optimized for your
            productivity
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-0 md:w-3/4">
          <div className="flex gap-3">
            <span className="bg-[#D9D9D9] p-4 rounded-full">
              <LuPhone className="text-black text-lg" />
            </span>
            <span>
              <p>+90 365 784 66</p>
              <p>+90 365 784 66</p>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="bg-[#D9D9D9] p-4 rounded-full">
              <FaRegEnvelope className="text-black text-lg" />
            </span>
            <span>
              <p>Immalex02@gmail.com</p>
              <p>Immalex02@gmail.com</p>
            </span>
          </div>
          <div className="flex gap-3 items-center">
            <span className="bg-[#D9D9D9] p-4 rounded-full">
              <IoMdHome className="text-black text-lg" />
            </span>
            <span>
              <p>Lagos, Nigeria</p>
            </span>
          </div>
        </div>
        <p>2024 Copyright All Rights Reserved</p>
      </footer>
      {selectedProduct && (
        <Modal isOpen={true} onClose={closeModal} product={selectedProduct} />
      )}
    </>
  );
}

export default Homepage;
