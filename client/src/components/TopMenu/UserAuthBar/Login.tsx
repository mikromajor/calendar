import React from "react";
import { Stack } from "@mui/material";
import { useAppSelector } from "../../../store/hooks/redux";
import { fetchUserLogin } from "../../../store/reducer/http/userActions";
import { passwordValidator } from "./handlers";
import { usePassword, useEmail } from "./hooks";
import {
  ServerMessage,
  Email,
  Password,
  SendButton,
} from "../../ui";

export function Login() {
  const { isLoading, isError, message } = useAppSelector(
    (state) => state.userReducer
  );

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

  let sendProtector =
    emailError || passwordError || !email || !password;

  return (
    <>
      <Stack direction='column' spacing={2}>
        <Email
          email={email}
          emailMessage={emailMessage}
          emailError={emailError}
          updateEmailState={updateEmailState}
        />

        <Password
          label={"Password"}
          showPassword={showPassword}
          passwordError={passwordError}
          password={password}
          passwordMessage={passwordMessage}
          setPassword={setPassword}
          handleClickShowPassword={handleClickShowPassword}
        />

        <SendButton
          sendHandler={fetchUserLogin}
          sendProtector={sendProtector}
          sendData={{ email, password }}
        />
      </Stack>

      <ServerMessage
        serverError={isError}
        serverMessage={message}
      />
    </>
  );
}
