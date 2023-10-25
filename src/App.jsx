import React from "react";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
