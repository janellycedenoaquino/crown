import React, { useState, SyntheticEvent } from "react";
import { TextField, Box, Container, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let history = useNavigate();
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
    console.log("this is the user object", userObj);
    console.log("inside handle submit");
    await axios.post("http://localhost:3001/auth/signup", {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userObj }),
    });
    history("/signin");
  };

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
