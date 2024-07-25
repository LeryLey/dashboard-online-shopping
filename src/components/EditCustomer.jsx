import { IoMdSave } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp } from "../constants";
import { stagger } from "../constants";
const EditCustomer = () => {
  const navigate = useNavigate();
  const gotoCustomer = () => {
    navigate("/customer");
  };

  const [input, setInput] = useState([]);
  const { id } = useParams();

  // get customer
  const getCustomer = () => {
    axios
      .get(`http://localhost/build_api/api_customers/${id}`)
      .then((res) => {
        setInput(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // initial data
  useEffect(() => {
    getCustomer();
  }, []);

  // handle change
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost/build_api/api_customers/${id}/edit`, input)
      .then((res) => {
        if (res.data.success === 1) {
          alert(res.data.message);
          gotoCustomer();
        } else {
          alert(res.data.error);
        }
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
            Edit Customer
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
              <label
                htmlFor="customer_name"
                className="text-blue-500 text-base"
              >
                Customer Name*
              </label>
              <br />
              <input
                type="text"
                name="customer_name"
                value={input.customer_name}
                onChange={handleChange}
                placeholder="example"
                className="px-2 py-1 rounded-md bg-gray-200 dark:bg-black/40 w-full outline-none text-gray-500 dark:text-gray-300 placeholder:text-gray-400/70 dark:placeholder:text-gray-500 focus:border-blue-500 duration-300 border-2 border-transparent"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full">
              <label htmlFor="phone" className="text-blue-500 text-base">
                Phone Number*
              </label>
              <br />
              <input
                type="tel"
                name="phone"
                value={input.phone}
                onChange={handleChange}
                id="phone"
                placeholder="000-000-000"
                className="px-2 py-1 rounded-md bg-gray-200 dark:bg-black/40 w-full outline-none text-gray-500 dark:text-gray-300 placeholder:text-gray-400/70 dark:placeholder:text-gray-500 focus:border-blue-500 duration-300 border-2 border-transparent"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full col-span-2">
              <label htmlFor="email" className="text-blue-500 text-base">
                Email *
              </label>
              <br />
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                id="email"
                placeholder="example@gmail.com"
                className="px-2 py-1 rounded-md bg-gray-200 dark:bg-black/40 w-full outline-none text-gray-500 dark:text-gray-300 placeholder:text-gray-400/70 dark:placeholder:text-gray-500 focus:border-blue-500 duration-300 border-2 border-transparent"
              />
            </motion.div>
            <motion.div variants={fadeInUp} className="w-full col-span-2">
              <label htmlFor="address" className="text-blue-500 text-base">
                Address *
              </label>
              <br />
              <textarea
                name="address"
                value={input.address}
                onChange={handleChange}
                id="address"
                rows={8}
                placeholder="Example: 1234, Street, City, Province"
                className="px-2 py-1 rounded-md bg-gray-200 dark:bg-black/40 w-full outline-none text-gray-500 dark:text-gray-300 placeholder:text-gray-400/70 dark:placeholder:text-gray-500 focus:border-blue-500 duration-300 border-2 border-transparent"
              ></textarea>
            </motion.div>
          </motion.form>
          <div className="w-full flex space-x-2">
            <motion.button
              variants={fadeInUp}
              type="submit"
              onClick={handleSubmit}
              className=" px-5 bg-black hover:bg-black/80 active:bg-black rounded text-gray-200 py-1 uppercase flex items-center gap-1 "
            >
              <span>
                <IoMdSave />
              </span>
              Save Customer
            </motion.button>
            <Link to={`/customer`}>
              <motion.button
                variants={fadeInUp}
                type="button"
                className=" px-5 bg-red-600 hover:bg-red-500 active:bg-red-600 border-2 border-red-600 text-gray-100 rounded  py-1 uppercase flex items-center gap-1 "
              >
                Exit
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCustomer;
