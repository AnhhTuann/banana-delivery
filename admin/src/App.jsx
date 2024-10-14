import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Siderbar/Sidebar";
import { Routes, Route } from "react-router";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const url = "http://localhost:4000";
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route exact path="/add" element={<Add url={url} />} />
          <Route exact path="/list" element={<List url={url} />} />
          <Route exact path="/orders" element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
