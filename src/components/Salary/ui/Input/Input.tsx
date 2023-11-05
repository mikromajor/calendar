import {
  useAppSelector,
  useAppDispatch,
} from "../../../../store/hooks/redux";

import { salaryActions } from "../../../../store/reducer/salaryReducer";
import { KeysSalaryInit } from "../../../../store/reducer/types/salaryTypes";

type InputProps = {
  payloadsKey: KeysSalaryInit;
};

export const Input = ({ payloadsKey }: InputProps) => {
  const dispatch = useAppDispatch();
  const { salaryReducer } = useAppSelector(
    (state) => state
  );
  const { getSalary, changeSalaryDate } = salaryActions;

  const handlerInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const val = Number(e.currentTarget.value);

    if (payloadsKey === "month" || payloadsKey === "year") {
      dispatch(changeSalaryDate({ [payloadsKey]: val }));
    } else {
      dispatch(getSalary({ [payloadsKey]: val }));
    }
  };

  return (
    <input
      placeholder={payloadsKey}
      type='number'
      onChange={handlerInputChange}
      value={String(salaryReducer[payloadsKey])}
    />
  );
};
