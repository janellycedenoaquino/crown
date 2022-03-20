import React, { useState, SyntheticEvent, useEffect } from "react";
import { TextField, Box, Container, Button } from "@mui/material";
import axios from "axios";
import { signUp } from "../store/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const Signup = () => {
  let history = useNavigate();
  let currUser = localStorage.getItem("currentUser");
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    let userObj = {
      username,
      email,
      password,
      address,
    };
    dispatch(signUp(userObj));
    history("/");
  };

  useEffect(() => {
    if (currUser !== null && currUser.length > 1) {
      history("/");
    }
  });
  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="500px"
        style={{
          padding: "3px 2px",
          width: 300,
          margin: "20px auto",
        }}
        sx={{ flexGrow: 2 }}
      >
        <Container>
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                label={"username"}
                placeholder={"username"}
                margin={"normal"}
                required
                InputLabelProps={{ shrink: true }}
                InputProps={{ disableUnderline: true }}
                value={username}
                onChange={(event) => setUsername(event.target.value)}
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
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
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
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </div>
            <Button type="submit">Sign Up</Button>
          </form>
        </Container>
      </Box>
    </div>
  );
};

export default Signup;
