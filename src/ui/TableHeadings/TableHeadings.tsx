import { TABLE_HEADINGS } from "../../store/reducer/constants/salaryConstants";

export const TableHeadings = () => {
  return (
    <thead>
      <tr>
        {TABLE_HEADINGS.map((heading, i) => (
          <th key={heading + String(i)}>{heading}</th>
        ))}
      </tr>
    </thead>
  );
};
