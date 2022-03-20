import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AllProducts from "./components/AllProducts";
import Signin from "./components/SignIn";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import axios from "axios";

const App = () => {
  useEffect(() => {
    (async () => {
      console.log("inside useEffect home page");
      let res = await axios.get("http://localhost:3001/auth/user", {
        // body: userObj,
      });
      console.log("this is res: ", res);
      console.log("this is the response ");
    })(); //IIFE
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
