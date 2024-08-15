import React from "react";
import { Stack } from "@mui/material";
import { useAppSelector } from "../../../store/hooks/redux";
import { passwordValidator } from "./handlers";
import { usePassword, useEmail } from "./hooks";
import { fetchUserRegistration } from "../../../store/reducer/http/userActions";
import {
  ServerMessage,
  Email,
  Password,
  SendButton,
} from "../../ui";

export function Registration() {
  const { isError, message } = useAppSelector(
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
    repeatPassword,
    showPassword,
    repeatPasswordMessage,
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
    const isPasswordMachining =
      passwordVal === repeatPassword;
    updatePasswordState({
      password: passwordVal,
      passwordError:
        !!validMessage || !isPasswordMachining
          ? true
          : false,
      passwordMessage: validMessage ? validMessage : "",
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
      passwordError:
        !isPasswordMachining || !!passwordMessage,
      repeatPasswordMessage: !repPassword.length
        ? "Repeat password"
        : isPasswordMachining
        ? ""
        : "Error matching passwords",
    });
  };

  let sendProtector =
    emailError ||
    passwordError ||
    !email ||
    !password ||
    !repeatPassword;
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

        <Password
          label={"Repeat password"}
          showPassword={showPassword}
          passwordError={passwordError}
          password={repeatPassword}
          passwordMessage={repeatPasswordMessage}
          setPassword={setRepeatPassword}
          handleClickShowPassword={handleClickShowPassword}
        />

        <SendButton
          sendHandler={fetchUserRegistration}
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
