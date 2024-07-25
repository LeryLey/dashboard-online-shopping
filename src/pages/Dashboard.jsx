import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { items } from "../constants";
import { categories } from "../constants";
const Home = () => {
  return (
    <div className="space-y-4  w-full duration-500">
      <div className="space-y-7 ">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl text-gray-600 dark:text-gray-200 "
        >
          Recent activity
        </motion.h2>
        <motion.div className="grid md:grid-cols-6 sm:grid-cols-3 gap-4 items-center ">
          {items.map((item, index) => {
            const { qty, span, txt } = item;
            return (
              <motion.article
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                key={index}
                className="flex flex-col bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 w-full h-36 rounded-xl text-center justify-center shadow-lg shadow-gray-300 dark:shadow-gray-800 space-y-1  "
              >
                <span className="text-blue-600 text-2xl ">{qty}</span>
                <span className="text-gray-500 ">{span}</span>
                <span className="text-gray-300 text-sm  font-medium">
                  {txt}
                </span>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1  gap-4">
        {/* sales */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          id="sales"
          className="bg-gray-200 dark:bg-black/30 w-full h-auto  rounded-md p-4 relative"
        >
          <h2 className="text-gray-600 dark:text-gray-200 text-xl font-medium">
            Sales
          </h2>
          <div className="flex justify-center items-center h-full w-full  absolute left-0 top-0">
            <span className="text-gray-400 dark:text-gray-500 select-none">
              No empty
            </span>
          </div>
        </motion.div>
        {/* top items category  */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          id="topItems"
          className="bg-gray-200 dark:bg-black/30 w-full h-auto rounded-md p-4 space-y-4 "
        >
          <div className=" flex justify-between ">
            <h2 className="text-gray-600 dark:text-gray-200 font-medium text-xl">
              Top Items Categories
            </h2>
            <Link to={"/category"}>
              <a href="#" className="text-blue-600 duration-300">
                View all
              </a>
            </Link>
          </div>
          <div id="category" className="gap-2 grid grid-cols-4">
            {categories.map((category, index) => {
              return (
                <span
                  key={index}
                  className="text-blue-600 bg-gray-300/40 dark:bg-gray-500/40 p-2 py-3 flex items-center justify-center  text-xl rounded-md hover:bg-gray-300 dark:hover:bg-gray-300/30"
                >
                  {category.icon}
                </span>
              );
            })}
          </div>
        </motion.div>
      </div>
      {/* stock numbers */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        id="list"
        className="grid lg:grid-cols-2 grid-cols-1  gap-4"
      >
        <div
          id="stockNumber"
          className="bg-gray-200 dark:bg-black/30 w-[] h-auto rounded-md p-3"
        >
          <h2 className="text-blue-600 text-xl mb-2">Stock numbers</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between group ">
              <span className="text-gray-400  group-hover:text-gray-100">
                Low stock items
              </span>
              <span
                id="lowStock"
                className="text-gray-400 group-hover:text-gray-100"
              >
                12
              </span>
            </div>
            <div className="flex items-center justify-between group">
              <span className="text-gray-400 group-hover:text-gray-100">
                Items categories
              </span>
              <span
                id="categoriesItems"
                className="text-gray-400 group-hover:text-gray-100"
              >
                6
              </span>
            </div>
            <div className="flex items-center justify-between group">
              <span className="text-gray-400 group-hover:text-gray-100">
                Refunded items
              </span>
              <span
                id="refundedItems"
                className="text-gray-400 group-hover:text-gray-100"
              >
                1
              </span>
            </div>
          </div>
        </div>
        {/* store List  */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          id="storeList"
          className="bg-gray-200 dark:bg-black/30 w-full h-auto rounded-md p-3"
        >
          <h2 className="text-blue-600 text-xl mb-2">Store List</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between group">
              <p className="text-gray-400  group-hover:text-gray-100">
                Manchester,UK
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                23 Employee
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                308 items
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                2 orders
              </p>
            </div>
            <div className="flex items-center justify-between group">
              <p className="text-gray-400  group-hover:text-gray-100">
                Manchester,UK
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                23 Employee
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                308 items
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                2 orders
              </p>
            </div>
            <div className="flex items-center justify-between group">
              <p className="text-gray-400  group-hover:text-gray-100">
                Manchester,UK
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                23 Employee
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                308 items
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                2 orders
              </p>
            </div>
            <div className="flex items-center justify-between group">
              <p className="text-gray-400  group-hover:text-gray-100">
                Manchester,UK
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                23 Employee
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                308 items
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                2 orders
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
