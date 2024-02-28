import {
  ControlPanel,
  Display,
  Cleaner,
  AlcoHeader,
} from "./alcoComponents";
import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export const AlcoCounter = () => {
  const [showAlcoCalendar, setShowAlcoCalendar] =
    useState(true);
  const [value, onChange] = useState<Value>(new Date());
  console.log("value => ", value);
  return (
    <>
      <div className='alcoCounter'>
        <AlcoHeader />
        <Display />
        {showAlcoCalendar && (
          <div className='alcoCalendar'>
            <Calendar onChange={onChange} value={value} />
          </div>
        )}
        <ControlPanel
          setShowAlcoCalendar={setShowAlcoCalendar}
        />
        <Cleaner />
      </div>
    </>
  );
};

//  TODO alcoCalculator v1:
// write a simple calculator with the next fields that you can change
// volume of liquid drunk
// quantity percent alcohol
// Button enter
// Calculator must adds quantity clear alcohol per month and show:
// volume of drunk clear alcohol per current month
// equivalent volume this alcohol in 40% (vodka) per current month

//extra TODO:
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
