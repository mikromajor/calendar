import SendIcon from "@mui/icons-material/Send";
import { LoadingButton } from "@mui/lab";

interface ISendButtonProps {
  sendProtector: boolean;
  isLoading: boolean;
  sendRequest: () => void;
}

export const SendButton = ({
  isLoading,
  sendProtector,
  sendRequest,
}: ISendButtonProps) => {
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
