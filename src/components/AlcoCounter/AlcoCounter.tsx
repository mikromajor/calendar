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

//  technical task - create alcoCalculator v1:
// write a simple calculator with the next fields that you can change
// volume of liquid drunk
// quantity percent alcohol
// Button enter
// Calculator must adds quantity clear alcohol per month and show:
// volume of drunk clear alcohol per current month
// equivalent volume this alcohol in 40% (vodka) per current month

//extra task:
// add info about volume of drunk clear alcohol per current year
// add info about volume of drunk vodka per current year
// add different smiles for 5 sec after clicked "calc button"
// add "+" "-" buttons beneath inputs

//trouble:
// after updating node 16->20 I have a problem:
//Node Sass does not yet support your current environment: Windows 64-bit with Unsupported runtime

//troubleshoot:
//uninstall node
//delete the existing npm install location (such as C:\Users\<user>\AppData\Roaming\npm)
//download and install  nvm-setup.exe  from https://github.com/coreybutler/nvm-windows/releases

//nvm install 16.20.0
//nvm use 16.20.0

// v2 => alcoCalculator + Calendar
