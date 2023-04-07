import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";

import { salaryActions } from "../../store/reducer/salaryReducer";
import {
  KeysSalaryInit,
  PayloadsKeys,
} from "../../store/reducer/types/salaryTypes";

type InputProps = {
  payloadsKey: PayloadsKeys;
  reducersKey: KeysSalaryInit;
};

export const Input = ({
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
      placeholder={payloadsKey}
      type='number'
      onChange={(e) => {
        const val = Number(e.currentTarget.value);
        dispatch(getSalary({ [payloadsKey]: val }));
      }}
      value={String(salaryReducer[reducersKey])}
    />
  );
};
