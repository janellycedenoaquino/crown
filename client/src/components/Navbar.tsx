import React, { useState, SyntheticEvent, useEffect } from "react";
import { Container, Box, AppBar, Toolbar, Typography } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/auth";

const Navbar = () => {
  const dispatch = useDispatch();
  let currUser = localStorage.getItem("currentUser");
  const logOut = async (event: SyntheticEvent) => {
    event.preventDefault();
    console.log(currUser);
    window.location.reload();
    dispatch(logout());
  };
  useEffect(() => {
    if (currUser && currUser.length !== null) {
      console.log("helloooo");
    }
  }, [currUser]);

  return (
    <div>
      {currUser ? (
        <>
          <Box sx={{ flexGrow: 2 }}>
            <AppBar position="static" color="transparent">
              <Container>
                <Toolbar>
                  <Typography sx={{ flexGrow: 2 }}>
                    <nav>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <a href="/">HOME </a>
                        <a href="/products">PRODUCTS </a>
                        <a href="/" onClick={logOut}>
                          logout{" "}
                        </a>
                        <a href="/cart">
                          <ShoppingBagIcon></ShoppingBagIcon>{" "}
                        </a>
                      </div>
                    </nav>
                  </Typography>
                </Toolbar>
              </Container>
            </AppBar>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ flexGrow: 2 }}>
            <AppBar position="static" color="transparent">
              <Container>
                <Toolbar>
                  <Typography sx={{ flexGrow: 2 }}>
                    <nav>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <a href="/">HOME </a>
                        <a href="/products">PRODUCTS </a>
                        <a href="/signin">SIGN IN </a>
                        <a href="/signup">SIGN UP </a>
                        <a href="/cart">
                          <ShoppingBagIcon></ShoppingBagIcon>{" "}
                        </a>
                      </div>
                    </nav>
                    {/* <Link to="/product">PRODUCTS</Link>
                <Link to="/signIn">SIGN IN</Link>
                <Link to="/signUp">SIGN UP</Link>
                <Link to="/cart">CART</Link> */}
                  </Typography>
                </Toolbar>
              </Container>
            </AppBar>
          </Box>
        </>
      )}
    </div>
  );
};

export default Navbar;
