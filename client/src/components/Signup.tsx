import React from "react";
import { TextField, Box, Container, Grid, Paper } from "@mui/material";

const Signup: React.FunctionComponent<{}> = (props) => {
  console.log('this is from sign up')
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="500px"
        style={{
          padding: "3px 2px",
          width: 280,
          margin: "20px auto",
        }}
        sx={{ flexGrow: 2 }}
      >
        <Container>
          <div>
            <TextField
              label={"username"}
              placeholder={"username"}
              margin={"normal"}
              required
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
            />
          </div>
          <div>
            <TextField
              label={"Email"}
              placeholder={"Email"}
              margin={"normal"}
              required
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
            />
          </div>
          <div>
            <TextField
              label={"Password"}
              placeholder={"Password"}
              margin={"normal"}
              required
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
            />
          </div>
          <div>
            <TextField
              label={"address"}
              placeholder={"address"}
              margin={"normal"}
              required
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
            />
          </div>
        </Container>
      </Box>
    </div>
  );
};

export default Signup;
