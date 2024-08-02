import React, { useState } from "react";
import { Button, Stack, ButtonGroup } from "@mui/material";
import { UserModal } from "./Modal";
import { Registration } from "./Registration";
import { Login } from "./Login";
import { Logout } from "./Logout";

export const UserAuthLinks = () => {
  const [open, setOpen] = useState<
    "reg" | "login" | "logout" | ""
  >("");

  const handleOpenRegistration = () => setOpen("reg");
  const handleOpenLogin = () => setOpen("login");
  const handleOpenLogOut = () => setOpen("logout");

  return (
    <Stack direction='row'>
      <ButtonGroup
        variant='text'
        orientation='horizontal'
        size='small'
        color='secondary'
        aria-label='alignment button group'
      >
        <Button onClick={handleOpenRegistration}>
          Registration
        </Button>
        <Button onClick={handleOpenLogin}>Login</Button>
        <Button onClick={handleOpenLogOut}>Logout</Button>
      </ButtonGroup>
      <UserModal open={open} setOpen={setOpen}>
        {open === "reg" && <Registration />}
        {open === "login" && <Login />}
        {open === "logout" && <Logout setOpen={setOpen} />}
      </UserModal>
    </Stack>
  );
};
