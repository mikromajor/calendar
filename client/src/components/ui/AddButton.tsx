import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";
import {
  useAppDispatch,
  useAppSelector,
} from "../../store/hooks/redux";
import { ALCO_CONTENT } from "../../constants/alcoConstants";
import { setDecimal } from "../../store/reducer/alcoHandlers";
import { addNewDoseToDB } from "../../store/reducer/http/alcoActions";

interface IAddButtonProps {
  volume: string;
  percent: string;
}

export function AddButton({
  volume,
  percent,
}: IAddButtonProps) {
  const { service, currentDate } = useAppSelector(
    (state) => state.alcoReducer
  );
  const { isError, isLoading } = service;
  const { currentLang } = useAppSelector(
    (state) => state.appReducer
  );
  const dispatch = useAppDispatch();

  const buttonSx = {
    ...(isError
      ? {
          bgcolor: "error",
        }
      : {
          bgcolor: "secondary",
        }),
  };

  const handleButtonClick = () => {
    if (volume && percent) {
      const vodka = setDecimal(
        (Number(volume) * Number(percent) * 2.5) / 100,
        0
      );
      dispatch(
        addNewDoseToDB({
          additionVodka: vodka + "",
          ...currentDate,
        })
      );
    }
  };
  //TODO add message from server
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ m: 1, position: "relative" }}>
        <Button
          variant='contained'
          sx={buttonSx}
          disabled={isLoading}
          onClick={handleButtonClick}
        >
          {ALCO_CONTENT[currentLang].btnAdd}
        </Button>
        {isLoading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-12px",
              marginLeft: "-12px",
            }}
          />
        )}
      </Box>
    </Box>
  );
}
