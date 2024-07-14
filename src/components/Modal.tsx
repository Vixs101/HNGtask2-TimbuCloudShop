// Modal.tsx
import React, { useState } from "react";
import { Product } from "../utils/utils";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useCart } from "../context/cartContext";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
  const { addToCart } = useCart();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleImage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg p-8 w-full md:w-1/3 lg:w-1/4 mx-auto "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-5 text-black text-2xl font-bold"
          onClick={onClose}
        >
          X
        </button>
        <h2 className="text-xl font-semibold text-primary">{product.name}</h2>
        <div className="relative w-full">
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
            onClick={toggleImage}
          >
            {"<"}
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
            onClick={toggleImage}
          >
            {">"}
          </button>
          {product.photos.map((photo, index) => (
            <img
              key={index}
              src={`https://api.timbu.cloud/images/${photo.url}`}
              alt={product.name}
              className={`my-4 h-72 w-full object-cover rounded-xl transition-opacity duration-300 ${index === currentImageIndex ? '' : 'hidden'}`}
            />
          ))}
        </div>
        <p className="text-gray-700">{product.description}</p>
        <button
          className="flex items-center gap-2 mt-4 bg-primary text-white py-2 px-4 rounded-lg hover:bg-[#8c552f]"
          onClick={() => {
            addToCart(product);
            onClose();
          }}
        >
          {" "}
          Add to cart
          <MdOutlineShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default Modal;
