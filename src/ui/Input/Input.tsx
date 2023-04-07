import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";

import { salaryActions } from "../../store/reducer/salaryReducer";
import {
  PayloadsKey,
  KeysSalaryInit,
} from "../../store/reducer/types/salaryTypes";

type InputProps = {
  tip: string;
  payloadsKey: PayloadsKey;
  reducersKey: KeysSalaryInit;
};

export const Input = ({
  tip,
  payloadsKey,
  reducersKey,
}: InputProps) => {
  const dispatch = useAppDispatch();
  const { salaryReducer } = useAppSelector(
    (state) => state
  );
  const { getSalary } = salaryActions;

  return (
    <input
      placeholder={String(tip)}
      type='number'
      onChange={(e) => {
        const val = Number(e.currentTarget.value);
        dispatch(getSalary({ [payloadsKey]: val }));
      }}
      value={String(salaryReducer[reducersKey])}
    />
  );
};
