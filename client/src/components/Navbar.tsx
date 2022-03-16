import React /*, { useState } */ from "react";
import { Container, Box, AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar: React.FunctionComponent<{}> = (props) => {
  return (
    <div>
      <Box sx={{ flexGrow: 2 }}>
        <AppBar position="static" color="transparent">
          <Container>
            <Toolbar>
              <Typography sx={{ flexGrow: 2 }}>
                <nav>
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <a href="/">HOME </a>
                    <a href="/products">PRODUCTS </a>
                    <a href="/signin">SIGN IN </a>
                    <a href="/signup">SIGN UP </a>
                    <a href="/cart">CART </a>
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
    </div>
  );
};

export default Navbar;
