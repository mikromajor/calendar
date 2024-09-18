import React, { FC } from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { userActions } from "../../../store/reducer/userReducer";
import { serviceActions } from "../../../store/reducer/serviceReducer";
import { useDispatch } from "react-redux";
import { ModalOpen } from "../../../types/userTypes";
import { SUCCESS_MESSAGE } from "../../../constants/serviceConstants";

interface LogoutProps {
  setOpen: React.Dispatch<ModalOpen>;
}

export function Logout({ setOpen }: LogoutProps) {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    setOpen("");
    dispatch(userActions.logOut());
    dispatch(
      serviceActions.addMessage(SUCCESS_MESSAGE.loggedOut)
    );
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
          onClick={handleLogOut}
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
