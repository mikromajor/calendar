import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Snackbar, {
  SnackbarCloseReason,
} from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

interface ISnackProps {
  serverError: boolean;
  serverMessage: string;
}

export default function Snack({
  serverError,
  serverMessage,
}: ISnackProps) {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(!!serverMessage ? true : false);
  }, [serverMessage]);

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
        color={serverError ? "error" : "success"}
        size='small'
        onClick={handleClose}
      >
        {serverMessage}
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
        autoHideDuration={10000}
        onClose={handleClose}
        message='Response from server:'
        action={action}
      />
    </div>
  );
}
