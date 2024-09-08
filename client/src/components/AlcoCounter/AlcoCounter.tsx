import {
  ControlPanel,
  Display,
  AlcoHeader,
  Calendar,
} from "./alcoComponents";
import { useAppSelector } from "../../store/hooks/redux";
import { Message } from "../ui";
import { alcoActions } from "../../store/reducer/alcoSlice";

export const AlcoCounter = () => {
  const { currentTheme } = useAppSelector(
    (state) => state.userReducer
  );
  const { isError, message } = useAppSelector(
    (state) => state.alcoReducer.service
  );

  return (
    <>
      <div className='alco-counter '>
        <AlcoHeader />
        <Display />
        <Calendar />
        <div
          className={`alco-counter__show-calendar-btn alco-counter__show-calendar-btn--${currentTheme}`}
        ></div>

        <ControlPanel />
        <Message
          isError={isError}
          message={message}
          resetMessage={alcoActions.resetMessage}
        />
      </div>
    </>
  );
};
