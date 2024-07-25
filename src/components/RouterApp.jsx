import Sidebar from "./Sidebar";
// eslint-disable-next-line no-unused-vars
import { Routes, Route } from "react-router-dom";
import Dashboard from "/src/pages/Dashboard";
import Products from "/src/pages/Products";
import Category from "/src/pages/Category";
import Stores from "/src/pages/Stores";
import Finances from "/src/pages/Finances";
import Settings from "/src/pages/Settings";
import AddProduct from "./AddProduct";
import Customer from "../pages/Customer";
import AddCustomer from "./AddCustomer";
import EditCustomer from "./EditCustomer";
import Users from "../pages/Users";
import AddUser from "./AddUser";
import EditProduct from "./EditProducts";
import EditUser from "./EditUser";
const RouterApp = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="w-full h-full rounded-3xl bg-gray-100  dark:bg-gray-700 overflow-y-auto overflow-x-hidden  scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500 p-4 border-blue-600 border-4  lg:translate-y-0  lg:mr-10 mr-4 lg:ml-0 ml-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Products />} />
          <Route path="/product/create" element={<AddProduct />} />
          <Route path="/product/:id/edit" element={<EditProduct />} />
          <Route path="/category" element={<Category />} />
          <Route path="/store" element={<Stores />} />
          <Route path="/finances" element={<Finances />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/setting" element={<Settings />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/customer/create" element={<AddCustomer />} />
          <Route path="/customer/:id/edit" element={<EditCustomer />} />
          <Route path="/user" element={<Users />} />
          <Route path="/user/create" element={<AddUser />} />
          <Route path="/user/:id/edit" element={<EditUser />} />
        </Routes>
      </div>
    </div>
  );
};

export default RouterApp;
