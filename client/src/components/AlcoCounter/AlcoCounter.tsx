import {
  ControlPanel,
  Display,
  AlcoHeader,
  Calendar,
} from "./alcoComponents";
import { useAppSelector } from "../../store/hooks/redux";

export const AlcoCounter = () => {
  const { currentTheme } = useAppSelector(
    (state) => state.userReducer
  );

  return (
    <>
      <div className='alco-counter '>
        <AlcoHeader />
        <Display />
        <Calendar />
        <ControlPanel />
      </div>
    </>
  );
};
