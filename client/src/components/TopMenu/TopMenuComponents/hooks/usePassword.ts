import React, { useState } from "react";

export interface IUpdatePassword {
  password?: string;
  repeatPassword?: string;
  passwordMessage?: string;
  showPassword?: boolean;
  passwordError?: boolean;
}

const INIT_PASSWORD = {
  password: "",
  repeatPassword: "",
  passwordMessage: "",
  showPassword: false,
  passwordError: false,
};

export default function usePassword() {
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
