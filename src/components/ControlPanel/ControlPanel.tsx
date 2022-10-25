import {
  ActionCreatorWithPayload,
  ActionCreatorWithoutPayload,
} from "@reduxjs/toolkit";
import { PayloadType } from "../../store/reducer/alcoReducer/alcoTypes";
import { useAppDispatch } from "../../store/hooks/redux";
import "./ControlPanel.scss";

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

  return (
    <>
      <br />
      <button onClick={() => dispatch(addCallback())}>
        Add 0.1
      </button>
      <div>
        {indicatorName} : {indicatorValue}
      </div>
      <button onClick={() => dispatch(subtractCallback())}>
        Subtract 0.1
      </button>
      <br />
    </>
  );
};
