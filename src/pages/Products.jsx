import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp } from "../constants";
import { FiEdit3 } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import { stagger } from "../constants";
import { useEffect, useState } from "react";
import axios from "axios";
const Products = () => {
  const navigate = useNavigate();
  const gotoAddProduct = () => {
    navigate("/product/create");
  };
  const [products, setProducts] = useState([]);
  const getProducts = () => {
    axios
      .get("http://localhost/build_api/api_products/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);
  // delete product
  const deleteProduct = (id, name) => {
    if (window.confirm(`Do you want to delete product '${name}' ?`)) {
      axios
        .delete(`http://localhost/build_api/api_products/${id}/delete`)
        .then((res) => {
          if (res.data.success === 1) {
            alert(res.data.message);
            getProducts();
          } else {
            alert(res.data.error);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div id="container-products">
      {/* product header  */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap gap-4 items-center justify-between"
      >
        <h1 className="text-3xl text-gray-600 dark:text-gray-200">Products</h1>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <form action="" className="relative">
            <input
              type="search"
              name="search-product"
              id="search-product"
              className="inputBox placeholder text-gray-600:dark:text-gray-300 bg-black/10 dark:bg-gray-500 focus:ring-2"
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
            <button
              type="button"
              onClick={gotoAddProduct}
              className="btn rounded-md flex items-center"
            >
              <span className="flex m-1">
                <ion-icon name="add-outline"></ion-icon>
              </span>
              Add Product
            </button>
          </div>
        </div>
      </motion.div>
      {/* product table  */}
      <motion.table variants={stagger} className="w-full mt-5">
        <thead className="border-b border-gray-500 h-10">
          <tr>
            <th className="text-left pl-10 text-gray-600 dark:text-gray-300 font-medium">
              No
            </th>
            <th className="text-left pl-10 text-gray-600 dark:text-gray-300 font-medium">
              Name of Product
            </th>
            <th className="text-left pl-10 text-gray-600 dark:text-gray-300 font-medium">
              Color
            </th>
            <th className="text-left pl-10 text-gray-600 dark:text-gray-300 font-medium">
              Price
            </th>
            <th className="text-left pl-10 text-gray-600 dark:text-gray-300 font-medium">
              Category
            </th>
            <th className="text-left pl-10 text-gray-600 dark:text-gray-300 font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <motion.tr
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.2, delay: 0.2 * index }}
              key={index}
              className="h-14 border-b border-gray-300 dark:border-gray-600 font-light"
            >
              <td className=" text-left px-10 text-gray-600 dark:text-gray-300 capitalize">
                {product.id}
              </td>
              <td className=" text-left px-10 text-gray-600 dark:text-gray-300 capitalize">
                {product.product_name}
              </td>
              <td className=" text-left px-10 text-gray-600 dark:text-gray-300 capitalize">
                {product.color}
              </td>
              <td className=" text-left px-10 text-gray-600 dark:text-gray-300 normal-case">
                $ {product.price}
              </td>
              <td className=" text-left px-10 text-gray-600 dark:text-gray-300 capitalize">
                {product.category}
              </td>
              <td className=" text-left px-10 text-gray-600 dark:text-gray-300 capitalize">
                <Link to={`/product/${product.id}/edit`}>
                  <button className="text-xl text-blue-600 dark:text-blue-500">
                    <FiEdit3 />
                  </button>
                </Link>
                <button
                  onClick={() =>
                    deleteProduct(product.id, product.product_name)
                  }
                  className=" text-xl text-red-600 dark:text-red-500 ml-2"
                >
                  <IoTrashOutline />
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
};

export default Products;
