import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";

import { salaryActions } from "../../store/reducer/salaryReducer";
import { PayloadsKeys } from "../../store/reducer/types/salaryTypes";

type InputProps = {
  payloadsKey: PayloadsKeys;
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
    if (
      payloadsKey === PayloadsKeys.month ||
      payloadsKey === PayloadsKeys.year
    ) {
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
