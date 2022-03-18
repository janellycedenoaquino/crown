import React from "react";
import { TextField, Box, Container, Grid, Paper } from "@mui/material";
// import { shadeTextFieldStylesHook } from '@mui-treasury/styles/textField/shade';

const Signin: React.FunctionComponent<{}> = (props) => {
  return (
    <div id="example">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="500px"
        style={{
          width: 280,
          margin: "20px auto",
        }}
        sx={{ flexGrow: 2 }}
      >
        <Container>
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
        </Container>
      </Box>
    </div>
  );
};

export default Signin;
