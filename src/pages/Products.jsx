import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../constants";
const Products = () => {
  return (
    <div id="container-products">
      {/* product header  */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap gap-4 items-center justify-between"
      >
        <h1 className="text-3xl text-gray-200">Products</h1>
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
      {/* product table  */}
      <table className="w-full mt-5">
        <thead className="border-b border-gray-500 h-10">
          <tr>
            <th className="text-left"></th>
            <th className="text-left text-gray-300 font-light">Photo</th>
            <th className="text-left text-gray-300 font-light">Name of Product</th>
            <th className="text-left text-gray-300 font-light">Stock info</th>
            <th className="text-left text-gray-300 font-light">Category</th>
            <th className="text-left text-gray-300 font-light">Location</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <motion.tr
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                key={index}
              >
                <td className="text-left">
                  <input type="checkbox" />
                </td>
                <td className="text-left">
                  <img
                    src={product.img}
                    alt="Product Image"
                    className="w-10 h-10 rounded-md"
                  />
                </td>
                <td className="text-left">{product.name}</td>
                <td className="text-left">{product.stockInfo}</td>
                <td className="text-left">{product.category}</td>
                <td className="text-left">{product.location}</td>
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
