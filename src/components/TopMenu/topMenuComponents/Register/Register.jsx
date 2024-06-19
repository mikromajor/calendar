import {
  Alert,
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUser } from "../../../../firebase";
import { startSession } from "../../../../store/session/session";

export default function Register() {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    // validate the inputs
    if (!email || !password || !repeatPassword) {
      setError("Please fill out all the fields.");
      return;
    }
    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }

    // clear the errors
    setError("");

    // TODO: send the register request

    try {
      let registerResponse = await createUser(
        email,
        password
      );
      startSession(registerResponse.user);
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
        Register
      </Typography>
      {error && (
        <Alert severity='error' sx={{ my: 2 }}>
          {error}
        </Alert>
      )}
      <Box component='form' onSubmit={onSubmit}>
        <TextField
          label='Email'
          variant='outlined'
          autoComplete='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        />
        <TextField
          label='Password'
          variant='outlined'
          type='password'
          autoComplete='new-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          label='Repeat password'
          variant='outlined'
          type='password'
          autoComplete='repeat-new-password'
          value={repeatPassword}
          onChange={(e) =>
            setRepeatPassword(e.target.value)
          }
        />
        <Button variant='contained' type='submit' fullWidth>
          Register
        </Button>
        <Box sx={{ mt: 2 }}>
          Already have an account?{" "}
          <Link
            onClick={() => {
              // checkout to login page
            }}
          >
            Login
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
