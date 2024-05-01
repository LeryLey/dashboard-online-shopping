import { Link } from "react-router-dom";
import Img from "/src/assets/images.jpeg";
import { motion } from "framer-motion";
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
      <table className="w-full my-6">
        <motion.thead
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="border-b-2 border-t-2 border-blue-500 "
        >
          <tr className="py-2">
            <th></th>
            <th>Name of Product</th>
            <th>Status</th>
            <th>Stock info</th>
            <th>Category</th>
            <th>Location</th>
          </tr>
        </motion.thead>
        <tbody>
          <motion.tr
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <td id="item">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <img src={Img} className="" id="product-img" />
            </td>
            <td>Bomber Jacket Male</td>
            <td>
              <span id="active">Active</span>
            </td>
            <td>12 in stock</td>
            <td>T-Shirt</td>
            <td>3 Store</td>
          </motion.tr>
          <motion.tr
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <td id="item">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <img src={Img} className="" id="product-img" />
            </td>
            <td>Bomber Jacket Male</td>
            <td>
              <span id="active">Active</span>
            </td>
            <td>12 in stock</td>
            <td>T-Shirt</td>
            <td>3 Store</td>
          </motion.tr>
          <motion.tr
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <td id="item">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <img src={Img} className="" id="product-img" />
            </td>
            <td>Bomber Jacket Male</td>
            <td>
              <span id="active">Active</span>
            </td>
            <td>12 in stock</td>
            <td>T-Shirt</td>
            <td>3 Store</td>
          </motion.tr>
          <motion.tr
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <td id="item">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <img src={Img} className="" id="product-img" />
            </td>
            <td>Bomber Jacket Male</td>
            <td>
              <span id="active">Active</span>
            </td>
            <td>12 in stock</td>
            <td>T-Shirt</td>
            <td>3 Store</td>
          </motion.tr>
          <motion.tr
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <td id="item">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <img src={Img} className="" id="product-img" />
            </td>
            <td>Bomber Jacket Male</td>
            <td>
              <span id="sold-out">Sold out</span>
            </td>
            <td>12 in stock</td>
            <td>T-Shirt</td>
            <td>3 Store</td>
          </motion.tr>
          <motion.tr
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <td id="item">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <img src={Img} className="" id="product-img" />
            </td>
            <td>Bomber Jacket Male</td>
            <td>
              <span id="active">Active</span>
            </td>
            <td>12 in stock</td>
            <td>T-Shirt</td>
            <td>3 Store</td>
          </motion.tr>
          <motion.tr
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <td id="item">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <img src={Img} className="" id="product-img" />
            </td>
            <td>Bomber Jacket Male</td>
            <td>
              <span id="active">Active</span>
            </td>
            <td>12 in stock</td>
            <td>T-Shirt</td>
            <td>3 Store</td>
          </motion.tr>
          <motion.tr
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <td id="item">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <img src={Img} className="" id="product-img" />
            </td>
            <td>Bomber Jacket Male</td>
            <td>
              <span id="sold-out">Sold out</span>
            </td>
            <td>12 in stock</td>
            <td>T-Shirt</td>
            <td>3 Store</td>
          </motion.tr>
          <motion.tr
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <td id="item">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <img src={Img} className="" id="product-img" />
            </td>
            <td>Bomber Jacket Male</td>
            <td>
              <span id="active">Active</span>
            </td>
            <td>12 in stock</td>
            <td>T-Shirt</td>
            <td>3 Store</td>
          </motion.tr>
          <motion.tr
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <td id="item">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <img src={Img} className="" id="product-img" />
            </td>
            <td>Bomber Jacket Male</td>
            <td>
              <span id="active">Active</span>
            </td>
            <td>12 in stock</td>
            <td>T-Shirt</td>
            <td>3 Store</td>
          </motion.tr>
          <motion.tr
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <td id="item">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <img src={Img} className="" id="product-img" />
            </td>
            <td>Bomber Jacket Male</td>
            <td>
              <span id="active">Active</span>
            </td>
            <td>12 in stock</td>
            <td>T-Shirt</td>
            <td>3 Store</td>
          </motion.tr>
        </tbody>
      </table>
    </div>
  );
};

export default Products;
