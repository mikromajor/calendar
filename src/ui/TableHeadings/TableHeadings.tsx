import { TABLE_HEADINGS } from "../../store/reducer/constants/salaryConstants";
import { Input } from "../.";

export const TableHeadings = () => {
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
