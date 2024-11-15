import React, { FC } from "react";
import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { userActions } from "store/reducer/userReducer";
import { serviceActions } from "store/reducer/serviceReducer";
import {
  useAppDispatch,
  useAppSelector,
} from "store/hooks/redux";
import { ModalOpen } from "types/userTypes";
import { SUCCESS_MESSAGE } from "constants/serviceConstants";
import { TOP_MENU_CONTENT } from "constants/userConstants";

interface LogoutProps {
  setOpen: React.Dispatch<ModalOpen>;
}

export function Logout({ setOpen }: LogoutProps) {
  const dispatch = useAppDispatch();
  const { currentLang } = useAppSelector(
    (state) => state.userReducer
  );
  const content = TOP_MENU_CONTENT[currentLang];

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
          {content.confirfLogout}
        </div>
        <LoadingButton
          variant='outlined'
          onClick={handleLogOut}
        >
          {content.logoutYes}
        </LoadingButton>
        <LoadingButton
          variant='outlined'
          onClick={modalClose}
        >
          {content.logoutNo}
        </LoadingButton>
      </Stack>
    </>
  );
}
