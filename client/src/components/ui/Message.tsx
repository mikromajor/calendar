import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Snackbar, {
  SnackbarCloseReason,
} from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../store/hooks/redux";

interface ISnackProps {
  isError: boolean;
  message: string;
  resetMessage: ActionCreatorWithoutPayload<string>;
}
// todo remove Message from Top to AlcoCalc
export function Message({
  isError,
  message,
  resetMessage,
}: ISnackProps) {
  const dispatch = useAppDispatch();
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") return;
    dispatch(resetMessage());
  };

  const action = (
    <React.Fragment>
      <Button
        color={isError ? "error" : "success"}
        size='large'
        onClick={handleClose}
      >
        {message}
      </Button>
      <IconButton
        size='small'
        aria-label='close'
        color='inherit'
        onClick={handleClose}
      >
        <CloseIcon fontSize='small' />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={!!message}
        // autoHideDuration={4000}
        onClose={handleClose}
        // message='Message:'
        action={action}
      />
    </div>
  );
}
