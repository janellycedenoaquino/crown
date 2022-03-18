import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import {
  Container,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Card,
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
const AllProducts: React.FunctionComponent = (props) => {
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
    <div className="App">
      {products ? (
        <div>
          <Container
            style={{
              margin: "40px auto",
            }}
          >
            <Grid container spacing={4}>
              {products.map((product: productType) => {
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
                      <Button size="small" variant="outlined">add to cart</Button>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </div>
      ) : (
        <div>no products</div>
      )}
    </div>
  );
};

export default AllProducts;
