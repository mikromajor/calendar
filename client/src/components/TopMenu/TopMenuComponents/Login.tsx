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
import {
  passwordValidator,
  emailValidator,
} from "./handlers";
import { usePassword, useEmail } from "./hooks";
import { Snack, Email } from "../../ui";

export const Login = () => {
  //TODO add window for server messages
  const { isLoading, isError, message } = useAppSelector(
    (state) => state.appReducer
  );
  const dispatch = useAppDispatch();

  const { emailState, updateEmailState } = useEmail();
  const { passwordState, updatePasswordState } =
    usePassword();
  const { email, emailError, emailMessage } = emailState;
  const {
    password,
    passwordError,
    passwordMessage,
    showPassword,
  } = passwordState;

  const handleClickShowPassword = () => {
    updatePasswordState({
      showPassword: !showPassword,
    });
  };

  // const handleMouseDownPassword = (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   event.preventDefault();
  //   console.log("handleMouseDownPassword fire");
  // };

  const setPassword = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const passwordVal = e.target.value;
    const validMessage = passwordValidator(passwordVal);

    updatePasswordState({
      password: passwordVal,
      passwordError: !!validMessage ? true : false,
      passwordMessage: validMessage
        ? validMessage
        : "Password valid",
    });
  };

  const sendRequest = () =>
    dispatch(fetchUserLogin({ email, password }));

  return (
    <>
      <Stack direction='column' spacing={2}>
        <TextField
          id='outlined-basic'
          label='Email'
          variant='outlined'
          required
          value={email}
          helperText={emailMessage ? emailMessage : ""}
          error={emailError}
          onChange={updateEmailState}
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
          helperText={passwordMessage}
          variant='outlined'
          required
          value={password}
          error={passwordError}
          onChange={setPassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  // onMouseDown={handleMouseDownPassword}
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
          disabled={
            emailError ||
            passwordError ||
            !email ||
            !password
          }
          onClick={sendRequest}
        >
          Send
        </LoadingButton>
      </Stack>
      <Snack
        serverError={isError}
        serverMessage={message}
      />
    </>
  );
};
