import React from "react";
import {
  Button,
  IconButton,
  Snackbar,
} from "@mui/material";
import { SnackbarCloseReason } from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import { useAppDispatch } from "../../store/hooks/redux";
import { serviceActions } from "../../store/reducer/serviceReducer";

interface ISnackProps {
  isError: boolean;
  message: string;
}
// todo remove Message from Top to AlcoCalc
export function Message({ isError, message }: ISnackProps) {
  const dispatch = useAppDispatch();
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") return;
    dispatch(serviceActions.resetMessage());
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
