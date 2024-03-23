import {
  ControlPanel,
  Display,
  Cleaner,
  AlcoHeader,
} from "./alcoComponents";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { Dates } from "../../types/alcoTypes";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { alcoActions } from "../../store/reducer/alcoReducer";
import { getDateMonthYear } from "../handlers";

export const AlcoCounter = () => {
  const [showAlcoCalendar, setShowAlcoCalendar] =
    useState(false);

  const dispatch = useAppDispatch();
  const { changeDay, changeMonth, changeYear } =
    alcoActions;

  const { currentDate, yearData } = useAppSelector(
    (state) => state.alcoReducer
  );
  const { day, month, year } = currentDate;
  const [d, m, y] = [day, month, year].map((date) =>
    Number(date)
  );

  const [value, onChange] = useState<Dates>(
    new Date(y, m, d)
  );
  useEffect(() => {
    if (value && value !== null && !Array.isArray(value)) {
      const [newDay, newMonth, newYear] =
        getDateMonthYear(value);

      newYear !== year &&
        dispatch(changeYear(newYear + ""));
      newMonth !== month &&
        dispatch(changeMonth(newMonth + ""));
      newDay !== day && dispatch(changeDay(newDay + ""));
    }
  }, [value, onChange]);

  const handleTileContent = () => <p>It's Sunday!</p>;

  return (
    <>
      <div className='alco-counter '>
        <AlcoHeader />
        <Display />
        {showAlcoCalendar && (
          <div className='alcoCalendar'>
            <Calendar
              onChange={onChange}
              value={value}
              // tileContent={handleTileContent}
            />
          </div>
        )}
        <ControlPanel
          setShowAlcoCalendar={setShowAlcoCalendar}
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
