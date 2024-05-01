import NavSide from "./NavSide";
// eslint-disable-next-line no-unused-vars
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "/src/pages/Home";
import Products from "/src/pages/Products";
import Category from "/src/pages/Category";
import Stores from "/src/pages/Stores";
import Finances from "/src/pages/Finances";
import Settings from "/src/pages/Settings";
import AddProduct from "./AddProduct";
const RouterApp = () => {
  return (
    <div className="flex w-full ">
      <NavSide />
      <div className="w-full h-full rounded-3xl  bg-gray-700 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500 p-4 border-blue-600 border-2  lg:translate-y-0  lg:mr-10 mr-4 lg:ml-0 ml-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/category" element={<Category />} />
          <Route path="/store" element={<Stores />} />
          <Route path="/finances" element={<Finances />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </div>
  );
};

export default RouterApp;
