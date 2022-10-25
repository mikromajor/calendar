type Props = {
  volume: number;
  month: string;
};

export const DisplayVd40 = ({ volume, month }: Props) => {
  return (
    <>
      <h3>Volume VD-40 : {volume}</h3>
      <h4>For the month : {month}</h4>
    </>
  );
};
