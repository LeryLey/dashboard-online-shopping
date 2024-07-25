import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { FiEdit3 } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { fadeInUp } from "../constants";
import { stagger } from "../constants";
const Users = () => {
  const navigate = useNavigate();
  const gotoAddUser = () => {
    navigate("create");
  };
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUsers = () => {
    axios
      .get("http://localhost/build_api/api_users/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);
  // loading
  if (loading) {
    return (
      <div className="absolute top-1/2 left-1/2 right-1/2 translate-x-1/2">
        <div
          role="status"
          className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
        >
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      </div>
    );
  }
  // delete user function
  const deleteUser = (id, name) => {
    if (window.confirm(`Are you sure you want to delete '${name}' ?`)) {
      axios
        .delete(`http://localhost/build_api/api_users/${id}/users`)
        .then((res) => {
          if (res.data.success === 1) {
            alert(res.data.message);
            getUsers();
          } else {
            alert(res.data.error);
          }
        })
        .catch(() => {});
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
        <h1 className="text-3xl text-gray-600 dark:text-gray-200">
          User Manage
        </h1>
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
            <button
              type="button"
              onClick={gotoAddUser}
              id="addProduct"
              className="btn rounded-md flex items-center"
            >
              <span className="flex m-1">
                <ion-icon name="add-outline"></ion-icon>
              </span>
              Add User
            </button>
          </div>
        </div>
      </motion.div>
      {/* product table  */}
      <motion.table variants={stagger} className="w-full mt-10">
        <thead className="border-b border-gray-500 h-10 font-medium">
          <tr className="">
            <th className="text-left text-gray-900 dark:text-gray-300  pl-10">
              N.O
            </th>
            <th className="text-left text-gray-900 dark:text-gray-300  pl-10">
              Username
            </th>
            {/* <th className="text-left text-gray-900 dark:text-gray-300  pl-10">
              Date of Birth
            </th> */}
            <th className="text-left text-gray-900 dark:text-gray-300  pl-10">
              Phone
            </th>
            <th className="text-left text-gray-900 dark:text-gray-300  pl-10">
              Email
            </th>
            <th className="text-left text-gray-900 dark:text-gray-300  pl-10">
              Address
            </th>
            <th className="text-left text-gray-900 dark:text-gray-300  pl-10">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <motion.tr
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.2, delay: 0.2 * index }}
              key={index}
              className="h-14 border-b border-gray-300 dark:border-gray-600 font-light"
            >
              <td className=" px-10 text-gray-600 dark:text-gray-300 capitalize">
                {user.id}
              </td>
              <td className=" px-10 text-gray-600 dark:text-gray-300 capitalize">
                {user.username}
              </td>
              <td className=" px-10 text-gray-600 dark:text-gray-300 normal-case">
                {user.phone}
              </td>
              <td className=" px-10 text-gray-600 dark:text-gray-300 lowercase">
                {user.email}
              </td>
              <td className=" px-10 text-gray-600 dark:text-gray-300 capitalize">
                {user.address}
              </td>
              <td className=" px-10 text-gray-600 dark:text-gray-300 capitalize">
                <Link to={`/user/${user.id}/edit`}>
                  <button className="  text-xl text-blue-600 dark:text-blue-500">
                    <FiEdit3 />
                  </button>
                </Link>
                <button
                  onClick={() => deleteUser(user.id, user.username)}
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

export default Users;
