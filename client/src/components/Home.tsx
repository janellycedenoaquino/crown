import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  Typography,
  CardContent,
  Button,
} from "@mui/material";

interface productType {
  id?: number;
  name?: string;
  image?: string;
  price?: number;
  description?: string;
  stock?: number;
}
const Home: React.FunctionComponent = (props) => {
  const [Ffour, setFirstFour] = useState<productType[]>([]);
  const [Lthree, setLastThree] = useState<productType[]>([]);
  const [one, setMiddleOne] = useState<productType[]>([]);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:3001/api/products/");
    const firstFour = res.data.splice(1, 4) as productType;
    const lastThree = res.data.splice(
      res.data.length - 3,
      res.data.length - 1
    ) as productType;
    const middleOne = res.data.splice(4, 1) as productType;

    setFirstFour([firstFour]);
    setLastThree([lastThree]);
    setMiddleOne([middleOne]);
  };

  useEffect(() => {
    getProducts().then(() => {
      return;
    });
  }, []);
  return (
    <Container>
      <div>
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
            <Grid item xs={12} sm={6} md={4}>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </h3>

                <a href="/products">SHOP ALL PRODUCTS </a>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <div
                style={{
                  margin: "40px",
                  marginRight: "50px",
                  justifyContent: "center",
                }}
              >
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
                </h1>
              </div>
            </Container>
          </div>
        </Grid>
        <Container
          style={{
            margin: "20px auto",
          }}
        >
          <Grid container spacing={4}>
            {Ffour.map((product: productType) => {
              return (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                  <Card style={{ padding: "20px" }}>
                    <CardMedia
                      style={{ paddingTop: "50%" }}
                      image={product.image}
                    />
                    <CardContent style={{ flexGrow: 1 }}>
                      <Typography>{product.name}</Typography>
                      <Typography>{product.description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    </Container>
  );
};

export default Home;
