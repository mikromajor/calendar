import React, { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

interface IEmail {
  email: string;
  emailMessage: string;
  emailError: boolean;
  updateEmailState: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => void;
}

export const Email = ({
  email,
  emailMessage,
  emailError,
  updateEmailState,
}: IEmail) => {
  return (
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
  );
};
