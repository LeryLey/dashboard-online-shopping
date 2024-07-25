import ManchesterUK from "/src/assets/store-manchester-uk.jpeg";
import YorkshireUK from "/src/assets/store-yorkshire-uk.jpeg";
import HullUK from "/src/assets/store-hull-uk.jpeg";
import LeicesterUK from "/src/assets/store-leicester-uk.jpeg";
import Img from "/src/assets/images.jpeg";
// icons
import { FaUser } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import { IoStorefront } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { IoShirt } from "react-icons/io5";
import { RiDashboard2Line } from "react-icons/ri";

export const links = [
  {
    icon: (
      <span className=" text-purple-500">
        <RiDashboard2Line />
      </span>
    ),
    title: "Dashboard",
    path: "/",
  },
  {
    icon: (
      <span className=" text-orange-500">
        <IoShirt />
      </span>
    ),
    title: "Products",
    path: "/product",
  },
  {
    icon: (
      <span className=" text-blue-500">
        <MdOutlineCategory />
      </span>
    ),
    title: "Category",
    path: "/category",
  },
  {
    icon: (
      <span className=" text-red-500">
        <IoStorefront size={15} />
      </span>
    ),
    title: "Stores",
    path: "/store",
  },
  {
    icon: (
      <span className=" text-purple-500">
        <ion-icon name="fitness"></ion-icon>
      </span>
    ),
    title: "Finances",
    path: "/finances",
  },
  {
    icon: (
      <span className=" text-blue-500">
        <RiCustomerServiceFill />
      </span>
    ),
    title: "Customer",
    path: "/customer",
  },
  {
    icon: (
      <span className=" text-yellow-500">
        <FaUser size={15} />
      </span>
    ),
    title: "User Manage",
    path: "/user",
  },
];
export const items = [
  {
    id: 1,
    qty: 741,
    span: "Qty",
    p: "NEW ITEMS",
  },
  {
    id: 2,
    qty: 123,
    span: "Qty",
    p: "NEW ORDERS",
  },
  {
    id: 3,
    qty: 12,
    span: "Qty",
    p: "NEW REFUNDS",
  },
  {
    id: 4,
    qty: 3,
    span: "Qty",
    p: "NEW MESSAGE",
  },
  {
    id: 5,
    qty: 1,
    span: "Qty",
    p: "NEW GROUP",
  },
  {
    id: 6,
    qty: 203,
    span: "Qty",
    p: "NEW FEEDBACK",
  },
];

export const topCategories = [
  {
    id: 1,
    icon: <ion-icon name="shirt"></ion-icon>,
    txt: "Bottoms",
    qyt: 49,
  },
  {
    id: 2,
    icon: <ion-icon name="bag-remove"></ion-icon>,
    txt: "Jeans",
    qyt: 49,
  },
  {
    id: 3,
    icon: <ion-icon name="glasses"></ion-icon>,
    txt: "Glasses",
    qyt: 49,
  },
  {
    id: 4,
    icon: <ion-icon name="shirt"></ion-icon>,
    txt: "Bottoms",
    qyt: 49,
  },
  {
    id: 5,
    icon: <ion-icon name="shirt"></ion-icon>,
    txt: "Bottoms",
    qyt: 49,
  },
  {
    id: 6,
    icon: <ion-icon name="shirt"></ion-icon>,
    txt: "Bottoms",
    qyt: 49,
  },
];
// stores
export const stores = [
  {
    id: 1,
    img: ManchesterUK,
    name: "Manchester UK Store",
  },
  {
    id: 2,
    img: YorkshireUK,
    name: "Yorkshire UK Store",
  },
  {
    id: 3,
    img: HullUK,
    name: "Hull UK Store",
  },
  {
    id: 4,
    img: LeicesterUK,
    name: "Leicester UK Store",
  },
];
// top categories

export const categories = [
  {
    id: 1,
    icon: <ion-icon name="shirt"></ion-icon>,
    txt: "Bottoms",
    qyt: 49,
  },
  {
    id: 2,
    icon: <ion-icon name="bag-remove"></ion-icon>,
    txt: "Jeans",
    qyt: 49,
  },
  {
    id: 3,
    icon: <ion-icon name="glasses"></ion-icon>,
    txt: "Glasses",
    qyt: 49,
  },
  {
    id: 4,
    icon: <ion-icon name="shirt"></ion-icon>,
    txt: "Bottoms",
    qyt: 49,
  },
  {
    id: 5,
    icon: <ion-icon name="shirt"></ion-icon>,
    txt: "Bottoms",
    qyt: 49,
  },
  {
    id: 6,
    icon: <ion-icon name="shirt"></ion-icon>,
    txt: "Bottoms",
    qyt: 49,
  },
  {
    id: 7,
    icon: <ion-icon name="shirt"></ion-icon>,
    txt: "Bottoms",
    qyt: 49,
  },
  {
    id: 8,
    icon: <ion-icon name="shirt"></ion-icon>,
    txt: "Bottoms",
    qyt: 49,
  },
];
// products

export const products = [
  {
    id: 1,
    img: Img,
    name: "Product 1",
    stockInfo: "12 in stock",
    category: "T-Shirt",
    location: "3 Store",
  },
  {
    id: 2,
    img: Img,
    name: "Product 2",
    stockInfo: "12 in stock",
    category: "T-Shirt",
    location: "3 Store",
  },
  {
    id: 3,
    img: Img,
    name: "Product 3",
    stockInfo: "12 in stock",
    category: "T-Shirt",
    location: "3 Store",
  },
];
// animation
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};
export const stagger = {
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// colors list
export const colors = [
  { id: 1, name: 'Black' }, { id: 2, name: 'Red' }, { id: 3, name: 'Green' }, { id: 4, name: 'White' },
  { id: 5, name: 'Blue' }, { id: 6, name: 'Yellow' }, { id: 7, name: 'Purple' }, { id: 8, name: 'Pink' },
  { id: 9, name: 'Orange' }, { id: 10, name: 'Brown' }, { id: 11, name: 'Gray' }, { id: 12, name: 'Cyan' },
  { id: 13, name: 'Magenta' }, { id: 14, name: 'Lime' }, { id: 15, name: 'Olive' }, { id: 16, name: 'Maroon' },
  { id: 17, name: 'Navy' }, { id: 18, name: 'Teal' }, { id: 19, name: 'Coral' }, { id: 20, name: 'Turquoise' },
  { id: 21, name: 'Gold' }, { id: 22, name: 'Silver' }, { id: 23, name: 'Beige' }, { id: 24, name: 'Lavender' },
  { id: 25, name: 'Salmon' }, { id: 26, name: 'Indigo' }, { id: 27, name: 'Crimson' }, { id: 28, name: 'Khaki' },
  { id: 29, name: 'Mint' }, { id: 30, name: 'Violet' }
];
