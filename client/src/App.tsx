import React from "react";
// import SignUp from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AllProducts from "./components/AllProducts";
import Signin from "./components/SignIn";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
// import RoutesElement from "./Routes";

const App: React.FunctionComponent<{}> = (props) => {
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
}

export default App;
