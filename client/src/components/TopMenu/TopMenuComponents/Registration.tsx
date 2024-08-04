import React from "react";
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

import Snackbar, {
  SnackbarCloseReason,
} from "@mui/material/Snackbar";

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

export const Registration = () => {
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
    console.log("passwordState => ", passwordState);
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
  //snack
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    //TODO
    //dispatch(toggleServerError())
    // setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button
        color='error'
        size='small'
        onClick={handleClose}
      >
        {message}
      </Button>
      <IconButton
        size='small'
        aria-label='close'
        color='inherit'
        onClick={handleClose}
      >
        <CloseIcon fontSize='small' />
      </IconButton>
    </React.Fragment>
  );

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
          disabled={emailError || passwordError || !email}
          onClick={sendRequest}
        >
          Send
        </LoadingButton>
      </Stack>
      <Snackbar
        open={!!message}
        autoHideDuration={6000}
        onClose={handleClose}
        message='Note archived'
        action={action}
      />
    </>
  );
};
