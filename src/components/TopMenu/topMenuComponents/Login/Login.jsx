import {
  Alert,
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { signInUser } from "../../../../firebase";
import { startSession } from "../../../../store/session/session";

export function Login() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    // validate the inputs
    if (!email || !password) {
      setError("Please enter your username and password.");
      return;
    }

    // clear the errors
    setError("");

    // TODO: send the login request
    try {
      let loginResponse = await signInUser(email, password);
      startSession(loginResponse.user);
      console.error("fire startSession");
      // navigate("/user");
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  };

  return (
    <Container
      maxWidth='xs'
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "column" },
        alignItems: "center",
      }}
    >
      <Typography
        variant='h6'
        component='h1'
        gutterBottom
        textAlign='center'
      >
        Login
      </Typography>
      {error && (
        <Alert severity='error' sx={{ my: 2 }}>
          {error}
        </Alert>
      )}
      <Box
        component='form'
        onSubmit={onSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          label='Email'
          variant='outlined'
          autoComplete='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label='Password'
          variant='outlined'
          type='password'
          autoComplete='new-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant='contained' type='submit'>
          Login
        </Button>
        <Box sx={{ mt: 2 }}>
          Don't have an account yet?
          <Link
            onClick={() => {
              // checkout to register page
            }}
          >
            Register
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
