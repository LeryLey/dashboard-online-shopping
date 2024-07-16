import "./index.css";
import Navbar from "./components/Navbar";
import RouterApp from "./components/RouterApp";

const App = () => {

  return (
    <div className="bg-gray-50 dark:bg-gray-900 h-screen transition-colors duration-500">
      <Navbar />
      <div className="flex h-[90vh] bg-gray-50 dark:bg-gray-900 rounded-md  transition-colors duration-500">
        <RouterApp />
      </div>
    </div>
  );
};

export default App;
