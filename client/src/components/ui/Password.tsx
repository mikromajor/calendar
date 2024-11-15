import React, { useState, useEffect } from "react";

import {
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface IPasswordProps {
  label: string;
  showPassword: boolean;
  passwordError: boolean;
  password: string;
  passwordMessage: string;
  setPassword: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => void;
  handleClickShowPassword: () => void;
}

export const Password = ({
  label,
  showPassword,
  passwordError,
  password,
  passwordMessage,
  setPassword,
  handleClickShowPassword,
}: IPasswordProps) => {
  return (
    <TextField
      id={"outlined-basic " + label}
      label={label}
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
  );
};
