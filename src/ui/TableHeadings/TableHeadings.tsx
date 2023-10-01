import { TABLE_HEADINGS } from "../../store/reducer/constants/salaryConstants";
import { Input } from "../.";
import { useAppSelector } from "../../store/hooks/redux";
import { PayloadsKeys } from "../../store/reducer/types/salaryTypes";

export const TableHeadings = () => {
  const { salaryReducer } = useAppSelector(
    (state) => state
  );
  return (
    <thead>
      {TABLE_HEADINGS.map((heading, i) => (
        <tr key={heading + String(i)}>
          <th>{heading}</th>
          <td>
            <Input
              payloadsKey={PayloadsKeys.bloodDonation}
            />
          </td>
        </tr>
      ))}
    </thead>
  );
};
