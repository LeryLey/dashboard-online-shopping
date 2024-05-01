import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
const NavSide = () => {
  const [navSide, setNavSide] = useState(false);
  const handleNavSide = () => {
    setNavSide(!navSide);
  };
  return (
    <div className="relative z-10">
      <div
        onClick={handleNavSide}
        className="text-4xl  absolute top-1/2 -left-2 text-gray-500 hover:text-white md:hidden "
      >
        <ion-icon name="caret-forward-outline"></ion-icon>
      </div>
      <div
        className={
          !navSide
            ? "flex flex-col justify-between duration-500 bg-gray-900 shadow-md lg:w-72 w-52 md:translate-x-0 -translate-x-full md:relative absolute h-full py-10  top-0"
            : "flex flex-col justify-between duration-500 bg-gray-900 shadow-md lg:w-72 w-52 h-full py-10 translate-x-0 md:relative absolute top-0"
        }
      >
        {/* btn close navSide  */}
        <div
          onClick={handleNavSide}
          className="absolute -right-1 top-1/2 text-3xl text-gray-500 hover:text-white md:hidden flex "
        >
          <ion-icon name="caret-back"></ion-icon>
        </div>
        <div className="space-y-6 duration-500">
          <Link to={"/"} className="w-full">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="list"
            >
              <ion-icon name="home"></ion-icon>
              <a href="#">Home</a>
            </motion.button>
          </Link>
          <Link to={"/product"} className="w-full">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="list"
            >
              <ion-icon name="shirt"></ion-icon>
              <a href="#">Products</a>
            </motion.button>
          </Link>
          <Link to={"/category"} className="w-full">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="list"
            >
              <ion-icon name="locate-outline"></ion-icon>
              <a href="#">Category</a>
            </motion.button>
          </Link>
          <Link to={"/store"} className="w-full">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="list"
            >
              <ion-icon name="storefront"></ion-icon>
              <a href="#">Stores</a>
            </motion.button>
          </Link>
          <Link to={"/finances"} className="w-full">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="list"
            >
              <ion-icon name="stats-chart"></ion-icon>
              <a href="#">Finances</a>
            </motion.button>
          </Link>
          <Link to={"/setting"} className="w-full">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="list"
            >
              <ion-icon name="cog"></ion-icon>
              <a href="#">Settings</a>
            </motion.button>
          </Link>
        </div>
        {/* options */}
        <div className="px-10 space-y-2">
          <Link to={"/add-product"}>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              type="button"
              id="addProducts"
              className="flex items-center text-gray-300"
            >
              <span className="text-xl flex mr-2 text-blue-600">
                <ion-icon name="add-circle-outline"></ion-icon>
              </span>
              Add Products
            </motion.button>
          </Link>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            type="button"
            id="logout"
            className="text-red-500 flex items-center"
          >
            <span className="text-xl flex mr-2">
              <ion-icon name="log-out-outline"></ion-icon>
            </span>
            Log out
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default NavSide;
