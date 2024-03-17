import { Button } from "@mui/material";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../store/hooks/redux";
import { alcoActions } from "../../../../store/reducer/alcoReducer";
import { ALCO_CONTENT } from "../../../../constants/alcoConstants";

type SwitchPanelProps = {
  setShowAlcoCalendar: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  showPanelInputDate: boolean;
  volumeDrank: string;
  percent: string;
};

export const SwitchPanel = ({
  setShowAlcoCalendar,
  volumeDrank,
  percent,
}: SwitchPanelProps) => {
  const dispatch = useAppDispatch();

  let theme = "white-theme";
  const { currentLang } = useAppSelector(
    (state) => state.appReducer
  );

  const { calculating } = alcoActions;

  return (
    <div className='switchPanel'>
      <Button
        id='btnAdd'
        variant='contained'
        onClick={() => {
          dispatch(calculating([volumeDrank, percent]));
        }}
      >
        {ALCO_CONTENT[currentLang].btnAdd}
      </Button>
      <Button
        id='btnShowAlcoCalendar'
        variant='contained'
        onClick={() => setShowAlcoCalendar((show) => !show)}
      >
        {ALCO_CONTENT[currentLang].btnShowAlcoCalendar}
      </Button>
    </div>
  );
};
