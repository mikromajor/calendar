import React, { useState, useEffect } from "react";
import { Button, Stack, ButtonGroup } from "@mui/material";
import { UserModal } from "./Modal";
import { Registration } from "./Registration";
import { Login } from "./Login";
import { Logout } from "./Logout";
import { ModalOpen } from "../../../types/userTypes";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../store/hooks/redux";
import { userActions } from "../../../store/reducer/userSlice";
import { Message } from "../../ui";

export default function UserAuthBar() {
  const [open, setOpen] = useState<ModalOpen>("");
  const { message } = useAppSelector(
    (store) => store.userReducer.service
  );
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   if (message) {
  //     setOpen("");
  //     setTimeout(() => {
  //       dispatch(userActions.resetMessage());
  //     }, 3000); // show message duration
  //   }
  // }, [message]);

  const openRegistration = () => {
    setOpen("reg");
  };
  const openLogin = () => {
    setOpen("login");
  };
  const openLogOut = () => {
    setOpen("logout");
  };

  const buttonClick = (callback: () => void) => callback();

  return (
    <Stack direction='row'>
      <ButtonGroup
        variant='text'
        orientation='horizontal'
        size='small'
        color='secondary'
        aria-label='alignment button group'
      >
        <Button
          onClick={() => {
            buttonClick(openRegistration);
          }}
        >
          Registration
        </Button>
        <Button
          onClick={() => {
            buttonClick(openLogin);
          }}
        >
          Login
        </Button>
        <Button
          onClick={() => {
            buttonClick(openLogOut);
          }}
        >
          Logout
        </Button>
      </ButtonGroup>
      <UserModal open={open} setOpen={setOpen}>
        {open === "reg" && <Registration />}
        {open === "login" && <Login />}
        {open === "logout" && <Logout setOpen={setOpen} />}
      </UserModal>
    </Stack>
  );
}
