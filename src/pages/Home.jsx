import { Link } from "react-router-dom";
import Items from "../components/Items";
import { motion } from "framer-motion";
const Home = () => {
  let items = [
    {
      id: 1,
      qty: 741,
      span: "Qty",
      p: "NEW ITEMS",
    },
    {
      id: 2,
      qty: 123,
      span: "Qty",
      p: "NEW ORDERS",
    },
    {
      id: 3,
      qty: 12,
      span: "Qty",
      p: "NEW REFUNDS",
    },
    {
      id: 4,
      qty: 3,
      span: "Qty",
      p: "NEW MESSAGE",
    },
    {
      id: 5,
      qty: 1,
      span: "Qty",
      p: "NEW GROUP",
    },
    {
      id: 6,
      qty: 203,
      span: "Qty",
      p: "NEW FEEDBACK",
    },
  ];
  return (
    <div className="space-y-4  w-full duration-500">
      <div className="space-y-7 ">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl text-gray-200 "
        >
          Recent activity
        </motion.h2>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          whileTap={{ x: -100 }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-6 sm:grid-cols-3 gap-4 items-center "
        >
          {items.map((item) => {
            let { qty, span, p, id } = item;
            return <Items key={id} qty={qty} span={span} txt={p} />;
          })}
          {/* <div
            id="btnNext"
            className="bg-white/30 rounded-full xl:h-12 xl:w-12 h-10 w-10 flex items-center justify-center text-xl text-gray-900 active:scale-[0.9] active:bg-white/50 duration-200"
          >
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </div> */}
        </motion.div>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1  gap-4">
        {/* sales */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          id="sales"
          className="bg-black/30 w-full h-auto  rounded-md p-4 relative"
        >
          <h2 className="text-gray-200 text-xl font-medium">Sales</h2>
          <div className="flex justify-center items-center h-full w-full  absolute left-0 top-0">
            <span className="text-gray-500 select-none">No empty</span>
          </div>
        </motion.div>
        {/* top items category  */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          id="topItems"
          className="bg-black/30 w-full h-auto rounded-md p-4 space-y-4 "
        >
          <div className=" flex justify-between ">
            <h2 className="text-gray-300 font-medium text-xl">
              Top Items Categories
            </h2>
            <Link to={'/category'}>
              <a href="#" className="text-blue-600 duration-300">
                View all
              </a>
            </Link>
          </div>
          <div id="category" className="gap-2 grid grid-cols-4">
            <span className="topCategory">
              <ion-icon name="shirt"></ion-icon>
            </span>
            <span className="topCategory">
              <ion-icon name="headset"></ion-icon>
            </span>
            <span className="topCategory">
              <ion-icon name="glasses"></ion-icon>
            </span>
            <span className="topCategory">
              <ion-icon name="briefcase"></ion-icon>
            </span>
            <span className="topCategory">
              <ion-icon name="shirt"></ion-icon>
            </span>
            <span className="topCategory">
              <ion-icon name="headset"></ion-icon>
            </span>
            <span className="topCategory">
              <ion-icon name="glasses"></ion-icon>
            </span>
            <span className="topCategory">
              <ion-icon name="briefcase"></ion-icon>
            </span>
          </div>
        </motion.div>
      </div>
      {/* stock numbers */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        id="list"
        className="grid lg:grid-cols-2 grid-cols-1  gap-4"
      >
        <div
          id="stockNumber"
          className="bg-black/30 w-[] h-auto rounded-md p-3"
        >
          <h2 className="text-blue-600 text-xl mb-2">Stock numbers</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between group ">
              <span className="text-gray-400  group-hover:text-gray-100">
                Low stock items
              </span>
              <span
                id="lowStock"
                className="text-gray-400 group-hover:text-gray-100"
              >
                12
              </span>
            </div>
            <div className="flex items-center justify-between group">
              <span className="text-gray-400 group-hover:text-gray-100">
                Items categories
              </span>
              <span
                id="categoriesItems"
                className="text-gray-400 group-hover:text-gray-100"
              >
                6
              </span>
            </div>
            <div className="flex items-center justify-between group">
              <span className="text-gray-400 group-hover:text-gray-100">
                Refunded items
              </span>
              <span
                id="refundedItems"
                className="text-gray-400 group-hover:text-gray-100"
              >
                1
              </span>
            </div>
          </div>
        </div>
        {/* store List  */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          id="storeList"
          className="bg-black/30 w-full h-auto rounded-md p-3"
        >
          <h2 className="text-blue-600 text-xl mb-2">Store List</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between group">
              <p className="text-gray-400  group-hover:text-gray-100">
                Manchester,UK
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                23 Employee
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                308 items
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                2 orders
              </p>
            </div>
            <div className="flex items-center justify-between group">
              <p className="text-gray-400  group-hover:text-gray-100">
                Manchester,UK
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                23 Employee
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                308 items
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                2 orders
              </p>
            </div>
            <div className="flex items-center justify-between group">
              <p className="text-gray-400  group-hover:text-gray-100">
                Manchester,UK
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                23 Employee
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                308 items
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                2 orders
              </p>
            </div>
            <div className="flex items-center justify-between group">
              <p className="text-gray-400  group-hover:text-gray-100">
                Manchester,UK
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                23 Employee
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                308 items
              </p>
              <p className="text-gray-400 group-hover:text-gray-100">
                2 orders
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
