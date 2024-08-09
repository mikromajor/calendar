import React, { useState } from "react";
import { emailValidator } from "../handlers";

interface IUpdateEmail {
  email?: string;
  emailError?: boolean;
  emailMessage?: string;
}

const INIT_EMAIL = {
  email: "",
  emailError: false,
  emailMessage: "Please write your email",
};

export function useEmail() {
  const [emailState, setEmailState] = useState(INIT_EMAIL);

  const updateEmailState = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const emailValue = e.currentTarget.value;
    const isEmailValid = emailValidator(emailValue);
    setEmailState({
      email: emailValue,
      emailMessage: isEmailValid ? isEmailValid : "",
      emailError: !!isEmailValid,
    });
  };
  return { emailState, updateEmailState };
}
