import { motion } from "framer-motion";
import { IoSunny, IoMoon } from "react-icons/io5";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [ms, setMs] = useState(false);
  const handle = () => {
    setMs(!ms);
  };
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const themSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <nav className="flex overflow-hidden items-center justify-between px-10 py-4 bg-gray-50 dark:bg-gray-900 shadow-sm transition-colors duration-500 ">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center sm:space-x-16 space-x-6  "
        >
          <h2 className="text-xl font-medium text-blue-600 mr-16">
            OnlineShop.io
          </h2>
          <form
            action="index.html"
            className="relative items-center text-gray-500 sm:flex hidden"
          >
            <input
              type="text"
              name="searchProduct"
              id="searchProduct"
              placeholder="Search"
              className="border-2 border-transparent rounded-md outline-none px-2 py-1 sm:w-72 focus:border-blue-600 duration-300 bg-black/10 dark:bg-gray-500 text-white "
            />
            <span className="absolute right-2">
              <ion-icon name="search-outline"></ion-icon>
            </span>
          </form>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center space-x-4"
        >
          <div className="flex">
            {/* toggle  */}
            <button
              onClick={themSwitch}
              className="text-xl text-gray-600 dark:text-white flex hover:bg-black/5 dark:hover:bg-white/10 p-2 rounded-full "
            >
              {theme === "light" ? <IoMoon size={22} /> : <IoSunny size={22} />}
            </button>
            {/* mail  */}
            <button className="text-xl text-gray-600 dark:text-white flex hover:bg-black/5 dark:hover:bg-white/10 p-2 rounded-full ">
              <ion-icon name="mail-unread"></ion-icon>
            </button>
            {/* setting  */}
            <button className="text-xl text-gray-600 dark:text-white flex hover:bg-black/5 dark:hover:bg-white/10 p-2 rounded-full ">
              <ion-icon name="cog"></ion-icon>
            </button>
            {/* notification */}
            <div
              id="notification"
              onClick={handle}
              className="relative text-xl text-gray-600 dark:text-white flex hover:bg-black/5 dark:hover:bg-white/10 p-2 rounded-full "
            >
              <ion-icon name="notifications"></ion-icon>
              <div
                id="ms"
                className={
                  !ms
                    ? "absolute w-40 bg-blue-600 right-0 top-10 rounded-md flex items-center justify-center p-2 opacity-0 duration-300 z-10"
                    : "absolute w-40 bg-blue-600 right-0 top-10 rounded-md flex items-center justify-center p-2 opacity-[1] duration-300 z-10"
                }
              >
                <span className="text-sm text-gray-300 select-none ">
                  No Notifications
                </span>
              </div>
            </div>
          </div>
          {/* profile  */}
          <div id="profile" className="select-none">
            <img
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="pf"
              className="w-8 h-8 object-cover rounded-full"
            />
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
