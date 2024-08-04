import React, { useState, useEffect } from "react";
import { AccountCircle } from "@mui/icons-material";
import {
  TextField,
  Stack,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../store/hooks/redux";
import {
  cleanMessageWithDelay,
  fetchUserLogin,
} from "../../../store/reducer/http/userActions";
import { passwordValidator } from "./handlers";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //TODO add email validation
  //TODO add password validation

  const handleClickShowPassword = () =>
    setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const { isLoading, isError, message } = useAppSelector(
    (state) => state.appReducer
  );
  const dispatch = useAppDispatch();

  const sendLoginRequest = () => {
    console.log("=>", { email, password });
    dispatch(fetchUserLogin({ email, password }));
  };
  if (isError) {
    dispatch(cleanMessageWithDelay());
  }
  // useEffect(() => {
  //   if (isError) {
  //     dispatch(cleanMessageWithDelay());
  //   }
  // }, [isError]);
  return (
    <>
      <Stack direction='column' spacing={2}>
        <TextField
          id='outlined-basic'
          label='Email'
          variant='outlined'
          required
          value={email}
          helperText={!!message ? message : ""}
          error={isError}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          id='outlined-basic'
          label='Password'
          type={showPassword ? "text" : "password"}
          helperText='Remember your password'
          variant='outlined'
          required
          value={password}
          error={isError}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <LoadingButton
          variant='contained'
          startIcon={<SendIcon />}
          loading={isLoading}
          onClick={sendLoginRequest}
        >
          Send
        </LoadingButton>
      </Stack>
    </>
  );
};
