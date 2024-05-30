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

  const { currentLang } = useAppSelector(
    (state) => state.appReducer
  );
  return (
    <>
      <div className='alco-counter '>
        <AlcoHeader />
        <Display />
        {showAlcoCalendar && (
          <div className='alco-counter__calendar'>
            <CalendarDayInfo />
          </div>
        )}
        <div className='alco-counter__show-calendar-btn alco-counter__show-calendar-btn--white-theme'>
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
