import React, { useState } from "react";
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
import { fetchUserRegistration } from "../../../store/reducer/http/userActions";

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

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

  const handleRepeatPassword = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const currentRepeated = e.target.value;
    setRepeatPassword(currentRepeated);

    password === currentRepeated
      ? setPasswordError(false)
      : setPasswordError(true);
  };

  const sendRequest = () => {
    //TODO add email validation
    //TODO add password validation
    console.log("=>", { email, password });
    dispatch(fetchUserRegistration({ email, password }));
  };

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

        <TextField
          id='outlined-basic'
          label='Repeat password'
          type={showPassword ? "text" : "password"}
          helperText={
            passwordError
              ? "Repeat your password again"
              : "Wrong repeated password"
          }
          variant='outlined'
          error={passwordError}
          required
          value={repeatPassword}
          onChange={handleRepeatPassword}
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
          onClick={sendRequest}
        >
          Send
        </LoadingButton>
      </Stack>
    </>
  );
};
