import React, { FC } from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";

interface LogoutProps {
  setOpen: React.Dispatch<"" | "reg" | "login" | "logout">;
}

export function Logout({ setOpen }: LogoutProps) {
  const sendLogoutRequest = () => {
    localStorage.setItem("token", "");
  };
  const modalClose = () => setOpen("");

  return (
    <>
      <Stack direction='row' spacing={2}>
        <div style={{ marginLeft: "5px" }}>
          You really want to log out?
        </div>
        <LoadingButton
          variant='outlined'
          onClick={sendLogoutRequest}
        >
          Yes
        </LoadingButton>
        <LoadingButton
          variant='outlined'
          onClick={modalClose}
        >
          No
        </LoadingButton>
      </Stack>
    </>
  );
}
