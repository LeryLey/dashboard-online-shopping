import { motion } from "framer-motion";
import Pic from "/src//assets/images.jpeg";
import { useState } from "react";
import { topCategories } from "../constants";
const Category = () => {
  const [addCgy, setAddCgy] = useState(false);
  const handleAddCgy = () => {
    setAddCgy(!addCgy);
  };
  return (
    <div id="container-category" className="relative">
      {/* header  */}
      <div
        id="header-category"
        className="flex flex-wrap gap-5 px-1 justify-between items-center "
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-2"
        >
          <h1 className="text-3xl text-gray-600 dark:text-gray-200 duration-300">Categories</h1>
          <p className="text-gray-400">
            Last update
            <span id="updateDate"> January 29, 2024 at 2:50 PM </span>
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <button
            type="button"
            id="addCategory"
            onClick={handleAddCgy}
            className="btn rounded-md flex items-center gap-1 "
          >
            <span className="flex">
              <ion-icon name="add"></ion-icon>
            </span>
            Add Category
          </button>
        </motion.div>
      </div>
      {/* body  */}
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 mt-10">
        {topCategories.map((category, index) => {
          const { icon, txt, qty } = category;
          return (
            <motion.article
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              className="w-full h-auto bg-gray-50 dark:bg-gray-500/40 rounded-md p-4 outline-transparent hover:outline hover:outline-blue-500 shadow-md duration-300"
            >
              <div className="w-full p-10 bg-gray-400 dark:bg-blue-300/40 flex justify-center items-center rounded-md mb-2">
                <span className="text-gray-100 text-3xl">{icon}</span>
              </div>
              <p className="text-gray-600 dark:text-white font-medium text-lg">{txt}</p>
              <span className="text-gray-400 dark:text-gray-300">{qty} items</span>
            </motion.article>
          );
        })}
      </div>
      {/* form add category */}
      <div
        className={
          !addCgy
            ? "absolute w-0  h-0 rounded-xl bg-black/40 backdrop-blur-md top-0 flex items-center justify-center overflow-hidden duration-500 left-1/2 right-1/2  opacity-0"
            : "absolute w-full left-0 h-full rounded-xl bg-black/40 backdrop-blur-md top-0 flex items-center justify-center overflow-auto duration-500 opacity-100"
        }
      >
        <h2 className="absolute top-4 left-4 text-2xl text-gray-200">
          Add Categories
        </h2>
        <form>
          <div className="w-full flex justify-center ">
            <div
              id="addPic"
              className="w-20 h-20 rounded-full overflow-hidden object-cover ring-2 ring-gray-400"
            >
              <img src={Pic} className="hover:scale-[1.1] duration-500 " />
            </div>
          </div>
          <div className="full flex flex-col ">
            <label htmlFor="name" className="text-gray-200">
              Category Name*
            </label>
            <br />
            <input
              type="text"
              name="cgyName"
              id="cgyName"
              className="inputBox text-gray-800 w-full"
            />
            <br />
          </div>
          <div className="sm:flex gap-4">
            <div>
              <label htmlFor="qty" className="text-gray-200">
                Qty*
              </label>
              <br />
              <input
                type="number"
                name="qtyItems"
                id="qtyItems"
                className="inputBox text-gray-800"
              />
              <br />
            </div>
            <div>
              <label htmlFor="" className="text-gray-200">
                Date*
              </label>
              <br />
              <input
                type="date"
                name="date"
                id="date"
                className="inputBox text-gray-800"
              />
            </div>
          </div>
        </form>
        <div
          onClick={handleAddCgy}
          className="absolute bottom-0 text-gray-500 text-xl hover:-translate-y-1 hover:text-gray-100 duration-300 p-4 "
        >
          <span>
            <ion-icon name="chevron-up"></ion-icon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Category;
