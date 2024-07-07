import {
  ControlPanel,
  Display,
  Cleaner,
  AlcoHeader,
  CalendarDayInfo,
} from "./alcoComponents";
import { Button } from "@mui/material";
import { useState } from "react";
import { useAppSelector } from "../../store/hooks/redux";

import { ALCO_CONTENT } from "../../constants/alcoConstants";

export const AlcoCounter = () => {
  const [showAlcoCalendar, setShowAlcoCalendar] =
    useState(false);

  const { currentLang, currentTheme } = useAppSelector(
    (state) => state.appReducer
  );

  return (
    <>
      <div className='alco-counter '>
        <AlcoHeader />
        <Display />
        {showAlcoCalendar && <CalendarDayInfo />}
        <div
          className={`alco-counter__show-calendar-btn alco-counter__show-calendar-btn--${currentTheme}`}
        >
          <Button
            id='btnShowAlcoCalendar'
            variant='contained'
            onClick={() =>
              setShowAlcoCalendar((show) => !show)
            }
          >
            {ALCO_CONTENT[currentLang].btnShowAlcoCalendar}
          </Button>
        </div>

        <ControlPanel
          showPanelInputDate={showAlcoCalendar}
        />
        <Cleaner />
      </div>
    </>
  );
};
