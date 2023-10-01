import { ControlPanel, Display, Cleaner } from "./..";

export const AlcoCalendar = () => {
  return (
    <div className='calendar'>
      <ControlPanel />
      <Display />
      <Cleaner />
    </div>
  );
};

//  TODO:
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
