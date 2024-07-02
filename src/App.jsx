import "./index.css";
import Navbar from "./components/Navbar";
import RouterApp from "./components/RouterApp";
const App = () => {
  return (
    <div className="bg-gray-900 h-screen">
      <Navbar />
      <div className="flex h-[90vh]  rounded-md ">
        <RouterApp />
      </div>
    </div>
  );
};

export default App;
