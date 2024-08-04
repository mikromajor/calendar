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
  fetchUserRegistration,
  cleanMessageWithDelay,
} from "../../../store/reducer/http/userActions";
import { passwordValidator } from "./handlers";
import usePassword, {
  IUpdatePassword,
} from "./hooks/usePassword";

export const Registration = () => {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [repeatPassword, setRepeatPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);
  // const [passwordMessage, setPasswordMessage] =
  //   useState("");

  const { passwordState, updatePasswordState } =
    usePassword();
  const {
    password,
    passwordError,
    passwordMessage,
    repeatPassword,
    showPassword,
  } = passwordState;

  const handleClickShowPassword = () => {
    updatePasswordState({
      showPassword: !showPassword,
    });
    //  setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    console.log("handleMouseDownPassword fire");
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
    updatePasswordState({
      repeatPassword: currentRepeated,

      passwordError: currentRepeated ? true : false,
    });
    // setRepeatPassword(currentRepeated);
    // setPasswordError(
    //   password === currentRepeated ? true : false
    // );
  };

  const sendRequest = () => {
    const validMessage = passwordValidator(password);
    updatePasswordState({
      passwordError: validMessage ? true : false,
      passwordMessage: validMessage
        ? validMessage
        : "Password valid",
    });
    // setPasswordError(validMessage ? true : false);
    // setPasswordMessage(
    //   validMessage ? validMessage : "Password valid"
    // );

    //TODO add email validation
    //TODO add password validation
    console.log("=>", { email, password });
    !validMessage &&
      dispatch(fetchUserRegistration({ email, password }));
  };
  if (isError) {
    dispatch(cleanMessageWithDelay());
  }
  // useEffect(() => {
  //   if (isError) {
  //     dispatch(cleanMessageWithDelay());
  //   }
  // }, [isError]);
  const setPassword = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    updatePasswordState({ password: e.target.value });
  };
  const setRepeatPassword = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    updatePasswordState({ repeatPassword: e.target.value });
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
          onChange={setPassword}
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
          helperText={
            passwordMessage
              ? passwordMessage
              : "Don't show your password"
          }
          variant='outlined'
          required
          value={password}
          error={passwordError}
          onChange={setRepeatPassword}
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
