import React, { useState, useEffect } from "react";
import {
  TextField,
  Stack,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";

import {
  AccountCircle,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

import { LoadingButton } from "@mui/lab";

import {
  useAppSelector,
  useAppDispatch,
} from "../../../store/hooks/redux";
import {
  fetchUserRegistration,
  cleanMessageWithDelay,
} from "../../../store/reducer/http/userActions";
import { passwordValidator } from "./handlers";
import { usePassword, useEmail } from "./hooks";
import Snack from "../../ui/Snack";

export const Registration = () => {
  const { isLoading, isError, message } = useAppSelector(
    (state) => state.appReducer
  );
  const [openSnack, setOpenSnack] = useState(false);
  useEffect(() => {
    if (message) {
      setOpenSnack(true);
    }
  }, [message, isError]);

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
  // };
  const setPassword = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const passwordVal = e.target.value;
    const validMessage = passwordValidator(passwordVal);
    const isPasswordMachining =
      passwordVal === repeatPassword;
    updatePasswordState({
      password: passwordVal,
      passwordError:
        !!validMessage && !isPasswordMachining
          ? true
          : false,
      passwordMessage: validMessage
        ? validMessage
        : "Password valid",
      repeatPasswordMessage: isPasswordMachining
        ? ""
        : "Passwords not equals",
    });
  };

  const setRepeatPassword = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const repPassword = e.target.value;
    const isPasswordMachining = password === repPassword;
    updatePasswordState({
      repeatPassword: repPassword,
      passwordError: !isPasswordMachining,
      repeatPasswordMessage: !repPassword.length
        ? "Repeat password"
        : isPasswordMachining
        ? "All right"
        : "Error matching passwords",
    });
  };

  const sendRequest = () => {
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
          helperText={emailMessage ? emailMessage : ""}
          error={isError || emailError}
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
          disabled={
            emailError ||
            passwordError ||
            !email ||
            !password ||
            !repeatPassword
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
