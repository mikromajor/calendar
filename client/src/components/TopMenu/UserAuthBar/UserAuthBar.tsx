import React, { useState } from "react";
import { Button, Stack, ButtonGroup } from "@mui/material";
import { AuthModal } from "./AuthModal";
import { Registration } from "./Registration";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { ModalOpen } from "../../../types/userTypes";
export default function UserAuthBar() {
  const [open, setOpen] = useState<ModalOpen>("");

  return (
    <Stack direction='row'>
      <ButtonGroup
        variant='text'
        orientation='horizontal'
        size='small'
        color='secondary'
        aria-label='alignment button group'
      >
        <Button onClick={() => setOpen("reg")}>
          Registration
        </Button>
        <Button onClick={() => setOpen("login")}>
          Login
        </Button>
        <Button onClick={() => setOpen("logout")}>
          Logout
        </Button>
      </ButtonGroup>
      <AuthModal open={open} setOpen={setOpen}>
        {open === "reg" && <Registration />}
        {open === "login" && <Login />}
        {open === "logout" && <Logout setOpen={setOpen} />}
      </AuthModal>
    </Stack>
  );
}
