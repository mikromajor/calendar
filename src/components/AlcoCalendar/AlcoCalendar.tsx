import { useAppSelector } from "../../store/hooks/redux";
import { alcoActions } from "../../store/reducer/alcoReducer";
import { ControlPanel, Display, Cleaner } from "./..";

//  TODO:
// write a simple calculator with the next fields that you can change
// volume of liquid drunk
// quantity percent alcohol
// Button enter
// Calculator must adds quantity clear alcohol per month and show:
// volume of drunk clear alcohol
// equivalent volume this alcohol in 40% (vodka)
// equivalent volume this alcohol in 5% (beer)

//issue:
// I can see and change only current month data
// fix=> add input for changing months

export const AlcoCalendar = () => {
  return (
    <div className='calendar'>
      <ControlPanel />
      <Display />
      <Cleaner />
    </div>
  );
};
