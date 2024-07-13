import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";

export interface Product {
  id: string;
  name: string;
  current_price: number;
  description: string;
  photos: any;
}


const productImage = [
  {
    id: 1,
    title: "Black chair",
    price: "$650",
    alt: "Black chair",
    pic: "productImage3",
    button: <MdOutlineShoppingCart />,
  },
  {
    id: 2,
    title: "White chair",
    price: "$650",
    alt: "White chair",
    pic: "productImage2",
    button: <MdOutlineShoppingCart />,
  },
  {
    id: 3,
    title: "Brown chair",
    price: "$650",
    alt: "Brown chair",
    pic: "productImage1",
    button: <MdOutlineShoppingCart />,
  },
  {
    id: 4,
    title: "Black chair",
    price: "$650",
    alt: "Black chair",
    pic: "productImage3",
    button: <MdOutlineShoppingCart />,
  },
  {
    id: 5,
    title: "White chair",
    price: "$650",
    alt: "White chair",
    pic: "productImage2",
    button: <MdOutlineShoppingCart />,
  },
  {
    id: 6,
    title: "Brown chair",
    price: "$650",
    alt: "Brown chair",
    pic: "productImage1",
    button: <MdOutlineShoppingCart />,
  },
];

const checkoutItems = [
  {
    id: 11,
    pic: "checkoutImage1",
    title: "Brown Chair",
    text: "Locate the ideal chair for your workstation: Comfortable, ergonomic, and optimized for your productivity",
  },
  {
    id: 22,
    pic: "checkoutImage2",
    title: "Brown Chair",
    text: "Locate the ideal chair for your workstation: Comfortable, ergonomic, and optimized for your productivity",
  },
  {
    id: 33,
    pic: "checkoutImage3",
    title: "Brown Chair",
    text: "Locate the ideal chair for your workstation: Comfortable, ergonomic, and optimized for your productivity",
  },
];

const products = [
  {
    id: 1,
    title: "Black chair",
    price: "$650",
    alt: "Black chair",
    pic: "productImage3",
    button: <MdOutlineShoppingCart />,
  },
  {
    id: 2,
    title: "White chair",
    price: "$650",
    alt: "White chair",
    pic: "productImage2",
    button: <MdOutlineShoppingCart />,
  },
  {
    id: 3,
    title: "Brown chair",
    price: "$650",
    alt: "Brown chair",
    pic: "productImage1",
    button: <MdOutlineShoppingCart />,
  },
];

export { productImage, checkoutItems, products };
