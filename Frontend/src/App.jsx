import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import SingleDetail from "./pages/SingleDetail";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import AddProduct from "./pages/AddProduct";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/product/:id" element={<SingleDetail />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
      <Footer />
      <ToastContainer position="top-center" />
    </>
  );
};

export default App;
