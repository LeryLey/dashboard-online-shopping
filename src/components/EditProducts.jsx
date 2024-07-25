import { IoMdSave } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa6";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp } from "../constants";
import { stagger } from "../constants";

const EditProduct = () => {
  const navigate = useNavigate();
  const gotoProduct = () => {
    navigate("/product");
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [input, setInput] = useState([]);

  const { id } = useParams();

  const getProducts = () => {
    axios
      .get(`http://localhost/build_api/api_products/${id}`)
      .then((res) => {
        setInput(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost/build_api/api_products/${id}/edit`, input)
      .then((res) => {
        if (res.data.success === 1) {
          alert(res.data.message);
          gotoProduct();
        } else {
          alert(res.data.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div
        id="addProducts"
        className="relative w-full h-full flex items-center justify-center duration-500 p-6 "
      >
        <div className="w-full h-full  rounded-xl  overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full p-4 ">
          <h2 className="text-xl font-medium text-gray-600 dark:text-gray-100 text-center">
            Edit Product
          </h2>
          {/* form  */}
          <motion.form
            variants={stagger}
            initial="initial"
            animate="animate"
            onSubmit={handleSubmit}
            className="my-4 sm:gap-5 gap-2 grid grid-cols-2 "
          >
            <motion.div variants={fadeInUp} className="w-full">
              <label htmlFor="product_name" className="text-blue-500 text-base">
                Product Name*
              </label>
              <br />
              <input
                type="text"
                name="product_name"
                value={input.product_name}
                onChange={handleChange}
                placeholder="Example"
                className="px-2 py-1 rounded-md bg-gray-200 dark:bg-black/40 w-full outline-none text-gray-500 dark:text-gray-300 placeholder:text-gray-400/70 dark:placeholder:text-gray-500 focus:border-blue-500 duration-300 border-2 border-transparent"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full relative">
              <label htmlFor="color" className="text-blue-500 text-base">
                Product Color*
              </label>
              <br />
              <input
                type="text"
                name="color"
                value={input.color}
                onChange={handleChange}
                id="color"
                placeholder="Example: black..."
                className="px-2 py-1 rounded-md bg-gray-200 dark:bg-black/40 w-full outline-none text-gray-500 dark:text-gray-300 placeholder:text-gray-400/70 dark:placeholder:text-gray-500 focus:border-blue-500 duration-300 border-2 border-transparent"
              />
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="absolute right-3 top-8"
              >
                <FaChevronDown className="ml-2 text-gray-500" />
              </button>
              <ul
                className={`absolute top-full left-0 bg-gray-600 w-full rounded-md overflow-auto translate-y-1 ${
                  isDropdownOpen ? "h-40" : "h-0"
                } duration-300 ease-out`}
              ></ul>
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full col-span-2">
              <label htmlFor="price" className="text-blue-500 text-base">
                Price *
              </label>
              <br />
              <input
                type="text"
                name="price"
                value={input.price}
                onChange={handleChange}
                placeholder="00.0"
                className="px-2 py-1 rounded-md bg-gray-200 dark:bg-black/40 w-full outline-none text-gray-500 dark:text-gray-300 placeholder:text-gray-400/70 dark:placeholder:text-gray-500 focus:border-blue-500 duration-300 border-2 border-transparent"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full col-span-2">
              <label htmlFor="category" className="text-blue-500 text-base">
                Category *
              </label>
              <br />
              <input
                type="text"
                name="category"
                value={input.category}
                onChange={handleChange}
                id="category"
                placeholder="Example: T-Shirt"
                className="px-2 py-1 rounded-md bg-gray-200 dark:bg-black/40 w-full outline-none text-gray-500 dark:text-gray-300 placeholder:text-gray-400/70 dark:placeholder:text-gray-500 focus:border-blue-500 duration-300 border-2 border-transparent"
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="w-full col-span-2">
              <label htmlFor="description" className="text-blue-500 text-base">
                Description *
              </label>
              <br />
              <textarea
                name="description"
                value={input.description}
                onChange={handleChange}
                id="description"
                rows={4}
                placeholder="Descriptions"
                className="px-2 py-1 rounded-md bg-gray-200 dark:bg-black/40 w-full outline-none text-gray-500 dark:text-gray-300 placeholder:text-gray-400/70 dark:placeholder:text-gray-500 focus:border-blue-500 duration-300 border-2 border-transparent"
              ></textarea>
            </motion.div>
          </motion.form>
          <div className="w-full flex space-x-2">
            <motion.button
              variants={fadeInUp}
              onClick={handleSubmit}
              type="submit"
              className=" px-5 bg-black hover:bg-black/80 active:bg-black rounded text-gray-200 py-1 uppercase flex items-center gap-1 "
            >
              <span>
                <IoMdSave />
              </span>
              Save Customer
            </motion.button>
            <motion.button
              onClick={gotoProduct}
              variants={fadeInUp}
              type="button"
              className=" px-5 bg-red-600 hover:bg-red-500 active:bg-red-600 border-2 border-red-600 text-gray-100 rounded  py-1 uppercase flex items-center gap-1 "
            >
              Exit
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
