type PlusMinusValProps = {
  step: number;
  setVal: React.Dispatch<React.SetStateAction<string>>;
};

export const PlusMinusVal = ({
  step,
  setVal,
}: PlusMinusValProps) => {
  return (
    <div className='blok_plus_minus'>
      <button
        className='plus'
        onClick={() => {
          setVal((prev: string) =>
            (Number(prev) + step).toString()
          );
        }}
      >
        +
      </button>
      <button
        className='minus'
        onClick={() => {
          setVal((prev: string) =>
            (Number(prev) - step).toString()
          );
        }}
      >
        -
      </button>
    </div>
  );
};
