import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { Container, Grid } from "@mui/material";

interface productType {
  id?: number;
  name?: string;
  image?: string;
  price?: number;
  description?: string;
  stock?: number;
}
const Home: React.FunctionComponent = (props) => {
  const [products, setProducts] = useState<productType[]>([]);
  const getProducts = async () => {
    const res = await axios.get("http://localhost:3001/api/products/");
    return res.data;
  };

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, []);
  console.log("these are the props: ", products);
  return (
    <Container>
      <Grid container spacing={4}>
        <div
          className="home"
          style={{
            margin: "20px auto",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Grid item xs={12} sm={12} md={12}>
            <div
              style={{
                margin: "100px auto",
              }}
            >
              <h1
                style={{
                  margin: "10px auto",
                  justifyContent: "center",
                }}
              >
                website info
              </h1>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </h3>

              {/* <Route path="/" element={<Home />}>Shop Now</Route> */}
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div>
              <img src="https://i.insider.com/60356a70bed5c50011a2c214?width=700" />
            </div>
          </Grid>
        </div>
        <div>
          <Container>
            <div
              style={{
                margin: "100px auto",
                backgroundColor: "#ffe8d6",
                height: "70px",
              }}
            >
              <h1
                style={{
                  margin: "20px auto",
                  padding: "2%",
                }}
              >
                20%
              </h1>
            </div>
          </Container>
        </div>
      </Grid>
    </Container>
  );
};

export default Home;
