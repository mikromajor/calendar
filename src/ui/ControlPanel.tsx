import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { PayloadType } from "../store/reducer/alcoReducer/alcoTypes";
import { useAppDispatch } from "../store/hooks/redux";

type ControlPanelProps = {
  indicatorName: string;
  indicatorValue: number;
  addCallback: ActionCreatorWithPayload<
    PayloadType,
    string
  >;
  subtractCallback: ActionCreatorWithPayload<
    PayloadType,
    string
  >;
};

const ControlPanel = ({
  indicatorName,
  indicatorValue,
  addCallback,
  subtractCallback,
}: ControlPanelProps) => {
  const dispatch = useAppDispatch();
  const payload = { liters: 1, percent: 1 };

  return (
    <>
      <button
        onClick={() => dispatch(addCallback(payload))}
      >
        Add
      </button>
      <div>
        {indicatorName} : {indicatorValue}
      </div>
      <button
        onClick={() => dispatch(subtractCallback(payload))}
      >
        Subtract
      </button>
    </>
  );
};
export default ControlPanel;
