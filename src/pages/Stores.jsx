import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ManchesterUK from "/src/assets/store-manchester-uk.jpeg";
import { stores } from "../constants";

const Stores = () => {
  return (
    <div id="container-store">
      {/* header store  */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap gap-4 items-center justify-between"
      >
        <h1 className="text-3xl text-gray-200">Stores</h1>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <form action="" className="relative">
            <input
              type="search"
              name="search-product"
              id="search-product"
              className="inputBox placeholder:text-gray-300 focus:ring-2"
              placeholder="Search product"
            />
            <span className="absolute right-2 top-1 text-xl text-gray-700">
              <ion-icon name="search-outline"></ion-icon>
            </span>
          </form>
          <div className="space-x-2 flex">
            <button
              type="button"
              id="filter-by"
              className="btn rounded-md flex items-center bg-blue-600/40"
            >
              Filter by
              <span className="flex m-1">
                <ion-icon name="chevron-down-outline"></ion-icon>
              </span>
            </button>
            <Link to={"/add-product"}>
              <button
                type="button"
                id="addProduct"
                className="btn rounded-md flex items-center"
              >
                <span className="flex m-1">
                  <ion-icon name="add-outline"></ion-icon>
                </span>
                Add Product
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
      {/* body store  */}
      <div id="container">
        <div className="my-4 grid sm:grid-cols-4 grid-cols-2 gap-4">
          {stores.map((store, index) => {
            return (
              <motion.article
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                key={index}
                className="p-4 rounded-md bg-gray-500/40 hover:outline outline-blue-600 focus:outline-blue-600"
              >
                <div className="rounded-md overflow-hidden">
                  <img
                    src={store.img}
                    className="hover:scale-[1.1] duration-300"
                  />
                </div>
                <span className="text-gray-400 flex mt-2">{store.name}</span>
              </motion.article>
            );
          })}
        </div>
        <div>
          {/* manchester, uk */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .5, delay: 0.7 }}
            className="bg-gray-500/50 sm:w-[500px] w-full rounded-md p-3 px-5"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-gray-200 text-xl">Manchester, UK</h2>
              <span className="text-xl text-gray-200 duration-300 hover:text-white ">
                <ion-icon name="close-outline"></ion-icon>
              </span>
            </div>
            {/* img  */}
            <div className="gap-4 flex my-5">
              <img src={ManchesterUK} className="w-20 h-20 rounded-md" />
              <img src={ManchesterUK} className="w-20 h-20 rounded-md" />
              <img src={ManchesterUK} className="w-20 h-20 rounded-md" />
            </div>
            {/* information  */}
            <div className="flex items-center justify-between flex-wrap">
              <div className="">
                <h3 className="text-gray-200">Employees: 23</h3>
                <h3 className="text-gray-200">Items: 203</h3>
                <h3 className="text-gray-200">Orders: 2</h3>
                <h3 className="text-gray-200">Refunds: 1</h3>
              </div>
              <div>
                {/* Employees  */}
                <p className="text-gray-300 ">
                  Most sold Items: Unisex I-shirt white
                </p>
                {/* items  */}
                <p className="text-gray-300 ">
                  Most popular category: T-shirts
                </p>
                {/* Orders */}
                <p className="text-gray-300 text-sm ">
                  Customer satisfaction. 93%
                </p>
                {/* Refunds  */}
                <p className="text-gray-300 ">Status Open</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Stores;
