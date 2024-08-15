import SendIcon from "@mui/icons-material/Send";
import { LoadingButton } from "@mui/lab";
import {
  useAppDispatch,
  useAppSelector,
} from "../../store/hooks/redux";
import { AsyncThunk } from "@reduxjs/toolkit";
import {
  EmailPassword,
  IUser,
  IServerRes,
} from "../../types/userTypes";
import { fetchUserRegistration } from "../../store/reducer/http/userActions";

interface ISendButtonProps {
  sendProtector: boolean;
  sendData: EmailPassword;
  sendHandler: AsyncThunk<IServerRes, EmailPassword, {}>;
}

export const SendButton = ({
  sendProtector,
  sendData,
  sendHandler,
}: ISendButtonProps) => {
  const isLoading = useAppSelector(
    (state) => state.userReducer.isLoading
  );
  const dispatch = useAppDispatch();

  const sendRequest = () => {
    dispatch(sendHandler(sendData));
  };

  return (
    <LoadingButton
      variant='contained'
      startIcon={<SendIcon />}
      loading={isLoading}
      disabled={sendProtector}
      onClick={sendRequest}
    >
      Send
    </LoadingButton>
  );
};
