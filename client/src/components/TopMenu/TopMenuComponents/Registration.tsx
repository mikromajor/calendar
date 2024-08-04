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
import {
  passwordValidator,
  emailValidator,
} from "./handlers";
import usePassword from "./hooks/usePassword";
import useEmail from "./hooks/useEmail";

export const Registration = () => {
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
    repeatPassword,
    showPassword,
    repeatPasswordMessage,
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

  const handleEmail = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const emailValue = e.target.value;
    const isEmailValid = emailValidator(emailValue);
    updateEmailState({
      email: emailValue,
      emailMessage: isEmailValid ? isEmailValid : "",
      emailError: !!isEmailValid,
    });
  };

  const sendRequest = () => {
    //TODO add email validation
    console.log("=>", { email, password });

    dispatch(fetchUserRegistration({ email, password }));
  };

  const setPassword = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const passwordVal = e.target.value;
    const validMessage = passwordValidator(passwordVal);
    updatePasswordState({
      password: passwordVal,
      passwordError: validMessage ? true : false,
      passwordMessage: validMessage
        ? validMessage
        : "Password valid",
    });
  };

  const setRepeatPassword = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const repPassword = e.target.value;
    const isPasswordMacing = password === repPassword;
    updatePasswordState({
      repeatPassword: repPassword,
      repeatPasswordMessage: !repPassword.length
        ? "Repeat password"
        : isPasswordMacing
        ? "All right"
        : "Error matching passwords",
      passwordError: !isPasswordMacing,
    });
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
          helperText={
            !!message
              ? message
              : emailMessage
              ? emailMessage
              : ""
          }
          error={isError || emailError}
          onChange={handleEmail}
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

        <TextField
          id='outlined-basic'
          label='Repeat password'
          type={showPassword ? "text" : "password"}
          helperText={repeatPasswordMessage}
          variant='outlined'
          error={passwordError}
          required
          value={repeatPassword}
          onChange={setRepeatPassword}
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
          onClick={sendRequest}
        >
          Send
        </LoadingButton>
      </Stack>
    </>
  );
};
