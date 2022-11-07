import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";

type ControlPanelProps = {
  indicatorName: string;
  indicatorValue: number;
  addCallback: ActionCreatorWithoutPayload<string>;
  subtractCallback: ActionCreatorWithoutPayload<string>;
};

export const ControlPanel = ({
  indicatorName,
  indicatorValue,
  addCallback,
  subtractCallback,
}: ControlPanelProps) => {
  const dispatch = useAppDispatch();
  const { alcoReducer } = useAppSelector((state) => state);
  const multiplier = alcoReducer.multiplier;
  return (
    <div className='calendar-controlPanel'>
      <button onClick={() => dispatch(addCallback())}>
        Add {multiplier}
      </button>
      <div>
        {indicatorName} : {indicatorValue}
      </div>
      <button onClick={() => dispatch(subtractCallback())}>
        Subtract {multiplier}
      </button>
      <br />
    </div>
  );
};
