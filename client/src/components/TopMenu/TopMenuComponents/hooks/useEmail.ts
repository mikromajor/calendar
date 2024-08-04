import React, { useState } from "react";

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

export default function useEmail() {
  const [emailState, setEmailState] = useState(INIT_EMAIL);

  const updateEmailState = (updateEmail: IUpdateEmail) => {
    setEmailState({ ...emailState, ...updateEmail });
  };
  return { emailState, updateEmailState };
}
