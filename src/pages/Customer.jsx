import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Customer = () => {
  return (
    <div id="container-products">
      {/* product header  */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap gap-4 items-center justify-between"
      >
        <h1 className="text-3xl text-gray-600 dark:text-gray-200">Customer List</h1>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <form action="" className="relative">
            <input
              type="search"
              name="search-product"
              id="search-product"
              className="inputBox bg-black/10 dark:bg-gray-500 placeholder text-gray-700:dark:text-gray-300  focus:ring-2"
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
              className="btn rounded-md flex items-center bg-blue-500 dark:bg-blue-600/40"
            >
              Filter by
              <span className="flex m-1">
                <ion-icon name="chevron-down-outline"></ion-icon>
              </span>
            </button>
            <Link to={"/addCustomer"}>
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
      {/* product table  */}
      <table className="w-full mt-5">
        <thead className="border-b border-gray-500 h-10">
          <tr>
            <th className="text-left text-gray-700 dark:text-gray-300 font-light pl-10">N.O</th>
            <th className="text-left text-gray-700 dark:text-gray-300 font-light pl-10">
              Customer Name
            </th>
            <th className="text-left text-gray-700 dark:text-gray-300 font-light pl-10">
              Date of Birth
            </th>
            <th className="text-left text-gray-700 dark:text-gray-300 font-light pl-10">Email</th>
            <th className="text-left text-gray-700 dark:text-gray-300 font-light pl-10">Address</th>
            <th className="text-left text-gray-700 dark:text-gray-300 font-light pl-10">Action</th>
          </tr>
        </thead>
        <tbody>
          
         
        </tbody>
      </table>
    </div>
  );
};

export default Customer;
