import TopCategories from "../components/TopCategories";
import { motion } from "framer-motion";
import Pic from "/src//assets/images.jpeg";
import { useState } from "react";
let topCategories = [
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
          <h1 className="text-3xl text-gray-200 duration-300">Categories</h1>
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="grid sm:grid-cols-3 grid-cols-2 gap-4 mt-10"
      >
        {topCategories.map((category) => {
          const { id, icon, txt, qyt } = category;
          return <TopCategories key={id} icon={icon} txt={txt} qty={qyt} />;
        })}
      </motion.div>
      {/* form add category */}
      <div
        className={
          !addCgy
            ? "absolute w-0  h-0 rounded-xl bg-black/40 backdrop-blur-md top-0 flex items-center justify-center overflow-hidden duration-500 left-1/2 right-1/2  opacity-0"
            : "absolute w-full left-0 h-full rounded-xl bg-black/40 backdrop-blur-md top-0 flex items-center justify-center overflow-auto duration-500 opacity-100"
        }
      >
        <h2 className="absolute top-4 left-4 text-2xl text-gray-200">Add Categories</h2>
        <form>
          <div className="w-full flex justify-center ">
            <div
              id="addPic"
              className="w-20 h-20 rounded-full overflow-hidden object-cover"
            >
              <img src={Pic} className="hover:scale-[1.1] duration-500" />
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
        <div onClick={handleAddCgy} className="absolute bottom-0 text-gray-500 text-xl hover:-translate-y-1 hover:text-gray-100 duration-300 p-4 ">
          <span>
            <ion-icon name="chevron-up"></ion-icon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Category;
