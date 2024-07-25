import { IoMdSave } from "react-icons/io";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInUp } from "../constants";
import { stagger } from "../constants";
const AddUser = () => {
  // path to user list
  const navigate = useNavigate();
  const gotoUser = () => {
    navigate("/user");
  };
  // function fetch api insert users
  const addUsers = () => {
    axios
      .post("http://localhost/build_api/api_users/create", input)
      .then((res) => {
        if (res.data.success === 1) {
          alert(res.data.message);
          gotoUser();
        } else {
          alert(res.data.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [input, setInput] = useState([]);
  // handle change input
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addUsers();
  };


  return (
    <>
      <div
        id="addProducts"
        className="relative w-full h-full flex items-center justify-center duration-500 p-6"
      >
        <div className="w-full h-full rounded-xl scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full p-4">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-xl font-medium text-gray-600 dark:text-gray-100 text-center"
          >
            Add New User
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            className="my-4 sm:gap-5 gap-2 grid grid-cols-2"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="w-full">
              <label
                htmlFor="customer_name"
                className="text-blue-500 text-base"
              >
                Username *
              </label>
              <br />
              <input
                type="text"
                name="username"
                onChange={handleChange}
                placeholder="example"
                className="px-2 py-1 rounded-md bg-gray-200 dark:bg-black/40 w-full outline-none text-gray-500 dark:text-gray-300 placeholder:text-gray-400/70 dark:placeholder:text-gray-500 focus:border-blue-500 duration-300 border-2 border-transparent"
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="w-full">
              <label htmlFor="password" className="text-blue-500 text-base">
                Password *
              </label>
              <br />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="@example#123"
                className="px-2 py-1 rounded-md bg-gray-200 dark:bg-black/40 w-full outline-none text-gray-500 dark:text-gray-300 placeholder:text-gray-400/70 dark:placeholder:text-gray-500 focus:border-blue-500 duration-300 border-2 border-transparent"
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="w-full">
              <label htmlFor="email" className="text-blue-500 text-base">
                Email *
              </label>
              <br />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="example@gmail.com"
                className="px-2 py-1 rounded-md bg-gray-200 dark:bg-black/40 w-full outline-none text-gray-500 dark:text-gray-300 placeholder:text-gray-400/70 dark:placeholder:text-gray-500 focus:border-blue-500 duration-300 border-2 border-transparent"
              />
            </motion.div>

            <motion.div variants={fadeInUp} className="w-full">
              <label htmlFor="phone" className="text-blue-500 text-base">
                Phone *
              </label>
              <br />
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                placeholder="000-000-000"
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
                onChange={handleChange}
                rows={8}
                placeholder="Example: 1234, Street, City, Province"
                className="px-2 py-1 rounded-md bg-gray-200 dark:bg-black/40 w-full outline-none text-gray-500 dark:text-gray-300 placeholder:text-gray-400/70 dark:placeholder:text-gray-500 focus:border-blue-500 duration-300 border-2 border-transparent"
              ></textarea>
            </motion.div>
          </motion.form>

          <motion.div
            className="w-full flex space-x-2"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <motion.button
              type="submit"
              onClick={handleSubmit}
              name="btnSaveProduct"
              id="btnSaveProduct"
              className="px-5 bg-black hover:bg-black/80 active:bg-black rounded text-gray-200 py-1 uppercase flex items-center gap-1"
            >
              <span>
                <IoMdSave />
              </span>
              Save User
            </motion.button>
            <motion.button
              type="button"
              onClick={gotoUser}
              name="btnSaveProduct"
              id="btnSaveProduct"
              className="px-5 bg-red-600 hover:bg-red-500 active:bg-red-600 border-2 border-red-600 text-gray-100 rounded py-1 uppercase flex items-center gap-1"
            >
              Exit
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
