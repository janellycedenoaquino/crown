import React, { useState, useEffect } from "react";
import axios from "axios";
import { item } from "../store/cart";
import { useSelector, useDispatch } from "react-redux";
import { currentUser } from "../store/auth";
import { addItem } from "../store/cart";
import {
  Container,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Card,
  Button,
} from "@mui/material";

const AllProducts: React.FunctionComponent = (props) => {
  let currUser = localStorage.getItem("currentUser");
  const dispatch = useDispatch();
  const [products, setProducts] = useState<item[]>([]);
  const getProducts = async () => {
    const res = await axios.get("http://localhost:3001/api/products/");
    return res.data;
  };

  const addToCart = async (currUser: string, product: item) => {
    if (currUser.length < 1) {
      dispatch(addItem(0, product));
    } else {
      let userID = JSON.parse(currUser).id;
      dispatch(addItem(userID, product));
    }
  };

  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, []);
  console.log("these are the props: ", products);
  return (
    <div className="App">
      {products ? (
        <div>
          <Container
            style={{
              margin: "40px auto",
            }}
          >
            <Grid container spacing={4}>
              {products.map((product: item) => {
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
                      <Button
                        size="small"
                        variant="outlined"
                        onClick={() => {
                          addToCart(currUser || "", product);
                        }}
                      >
                        add to cart
                      </Button>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </div>
      ) : (
        <div>There are no products please come back another time</div>
      )}
    </div>
  );
};

export default AllProducts;
