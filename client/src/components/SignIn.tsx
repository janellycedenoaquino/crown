import React, { useState, SyntheticEvent, useEffect } from "react";
import { TextField, Box, Container, Grid, Paper, Button } from "@mui/material";
import { login } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const Signin = () => {
  let history = useNavigate();
  let currUser = localStorage.getItem("currentUser");
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    let userObj = {
      email,
      password,
    };
    dispatch(login(userObj));
    history("/");
  };
  useEffect(() => {
    if (currUser !== null && currUser.length > 1) {
      history("/");
    }
  });
  return (
    <div id="example">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="500px"
        style={{
          width: 300,
          margin: "5px auto",
        }}
        sx={{ flexGrow: 2 }}
      >
        <Container>
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                label={"Email"}
                name={"email"}
                placeholder={"Email Address"}
                margin={"normal"}
                required
                InputLabelProps={{ shrink: true }}
                InputProps={{ disableUnderline: true }}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <TextField
                label={"Password"}
                name={"password"}
                type="password"
                placeholder={"Password"}
                margin={"normal"}
                required
                InputLabelProps={{ shrink: true }}
                InputProps={{ disableUnderline: true }}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <Button type="submit">Sign In</Button>
          </form>
        </Container>
      </Box>
    </div>
  );
};

export default Signin;
