import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);
  };
  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                pb: 1,
                pt: 3,
              }}
            >
              <Typography color="textPrimary" variant="h4">
                Sign Up
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              margin="normal"
              name="firstName"
              type="text"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              margin="normal"
              name="email"
              type="text"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              margin="normal"
              name="email"
              type="email"
              variant="outlined"
            />
  
            <TextField
              fullWidth
              label="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              margin="normal"
              name="email"
              type="text"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              name="password"
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign Up
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default LoginForm;
