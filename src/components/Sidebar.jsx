import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { links } from "../constants";
const Sidebar = () => {

  return (
    <div className="relative">
      <div
        className="text-4xl  absolute top-1/2 -left-2 text-gray-500 hover:text-white md:hidden "
      >
      </div>
      <nav>
        <ul className=" space-y-2 block md:hidden group">
          {links.map((link, index) => (
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              key={index}
              className="flex items-center px-4 py-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-r-full duration-300  overflow-hidden"
            >
              <Link to={link.path} className="flex items-center gap-2 w-full">
                <p
                  className="bg-black/10 dark:bg-white/10 h-8 w-8 text-base flex rounded-full items-center justify-center
"
                >
                  {link.icon}
                </p>

                <h2 className="text-lg text-gray-600  dark:text-gray-300 absolute opacity-0 group-hover:relative group-hover:opacity-100 ">
                  {link.title}
                </h2>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
      <div className="flex-col justify-between duration-500 bg-gray-50 dark:bg-gray-900 transition-all lg:w-72 w-52 md:translate-x-0 -translate-x-full md:relative absolute h-full py-10  top-0 md:flex hidden">
        <ul className="pr-4 space-y-2 ">
          {links.map((link, index) => (
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              key={index}
              className="flex items-center px-4 py-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-r-full duration-300 hover:pl-6 overflow-hidden"
            >
              <Link to={link.path} className="flex items-center gap-2 w-full">
                <p
                  className="bg-black/10 dark:bg-white/10 h-8 w-8 text-base flex rounded-full items-center justify-center
"
                >
                  {link.icon}
                </p>
                <h2 className="text-lg text-gray-600  dark:text-gray-300">
                  {link.title}
                </h2>
              </Link>
            </motion.li>
          ))}
        </ul>
        {/* options */}
        <div className="px-10 space-y-2">
          <Link to={"/add-product"}>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              type="button"
              id="addProducts"
              className="flex items-center text-gray-600 dark:text-gray-300"
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
            transition={{ duration: 0.5, delay: 1.5 }}
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

export default Sidebar;
