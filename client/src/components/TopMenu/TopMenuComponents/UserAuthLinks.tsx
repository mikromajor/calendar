import React, { useState } from "react";
import { Button, Stack, ButtonGroup } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";

import {
  useAppSelector,
  useAppDispatch,
} from "../../../store/hooks/redux";

export const UserAuthLinks = () => {
  return (
    <Stack direction='row'>
      <ButtonGroup
        variant='text'
        orientation='horizontal'
        size='small'
        color='secondary'
        aria-label='alignment button group'
      >
        <Button>Registration</Button>
        <Button>Login</Button>
        <Button>Logout</Button>
      </ButtonGroup>
    </Stack>
  );
};
