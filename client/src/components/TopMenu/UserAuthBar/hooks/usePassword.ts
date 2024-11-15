import React, { useState } from "react";

export interface IUpdatePassword {
  password?: string;
  repeatPassword?: string;
  passwordMessage?: string;
  showPassword?: boolean;
  passwordError?: boolean;
  repeatPasswordMessage?: string;
}

const INIT_PASSWORD = {
  password: "",
  repeatPassword: "",
  passwordMessage: "",
  repeatPasswordMessage: "",
  showPassword: false,
  passwordError: false,
};

export function usePassword() {
  const [passwordState, setPasswordState] =
    useState(INIT_PASSWORD);

  const updatePasswordState = (
    updatePasswordState: IUpdatePassword
  ) =>
    setPasswordState({
      ...passwordState,
      ...updatePasswordState,
    });

  return { passwordState, updatePasswordState };
}
