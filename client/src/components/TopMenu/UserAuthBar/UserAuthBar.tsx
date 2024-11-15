import React, { useState } from "react";
import { Button, Stack, ButtonGroup } from "@mui/material";
import { AuthModal } from "./AuthModal";
import { Registration } from "./Registration";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { ModalOpen } from "types/userTypes";
import { useAppSelector } from "store/hooks/redux";
import { TOP_MENU_CONTENT } from "constants/userConstants";

export default function UserAuthBar() {
  const [open, setOpen] = useState<ModalOpen>("");
  const { currentLang } = useAppSelector(
    (state) => state.userReducer
  );
  const content = TOP_MENU_CONTENT[currentLang];

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
          {content.registration}
        </Button>
        <Button onClick={() => setOpen("login")}>
          {content.login}
        </Button>
        <Button onClick={() => setOpen("logout")}>
          {content.logout}
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
