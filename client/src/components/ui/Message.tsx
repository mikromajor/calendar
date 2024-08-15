import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Snackbar, {
  SnackbarCloseReason,
} from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface ISnackProps {
  isError: boolean;
  message: string;
}

export function Message({ isError, message }: ISnackProps) {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(!!message ? true : false);
  }, [message]);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
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
        open={open}
        // autoHideDuration={4000}
        onClose={handleClose}
        message='Message:'
        action={action}
      />
    </div>
  );
}
