import { useState, useContext } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { loginUser } from "../api/auth";
import { AppContext, DispatchContext } from "../contexts/AppContext";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useContext(DispatchContext)
  const state = useContext(AppContext);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      dispatch({type:"SET_LOADING"})
      const user = await loginUser({username, password})
      //sessionStorage.setItem('token', user.data.token)
      console.log('user', user)
      dispatch({type: "SET_USER", payload: user.data})
    } catch (error) {
      
    }
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
                Sign in
              </Typography>
            </Box>
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
                Sign In Now
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default LoginForm;
