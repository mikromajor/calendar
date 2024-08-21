import { Button } from "@mui/material";
import { trimFirstZero } from "../../../../../store/reducer/alcoHandlers";
import { useAppSelector } from "../../../../../store/hooks/redux";
import { ALCO_CONTENT } from "../../../../../constants/alcoConstants";

type InputLiquidProps = {
  val: string;
  step: number;
  setVal: React.Dispatch<React.SetStateAction<string>>;
  role: "volume" | "percent";
};

export const InputLiquid = ({
  val,
  step,
  setVal,
  role,
}: InputLiquidProps) => {
  const { currentLang, currentTheme } = useAppSelector(
    (state) => state.userReducer
  );
  const content = ALCO_CONTENT[currentLang];
  const label =
    role === "percent"
      ? content.lblPercent
      : content.lblVolume;

  const variantButton =
    currentTheme === "white-theme"
      ? "outlined"
      : "contained";

  return (
    <>
      <div className='input-box'>
        <p id={label + role} className='input-box__label'>
          {label}
        </p>
        <div className='input-box__wrap'>
          <Button
            variant={variantButton}
            size='small'
            onClick={() => {
              setVal((prev: string) =>
                (Number(prev) + step).toString()
              );
            }}
          >
            +{step}
          </Button>
          <input
            id={label + role}
            className={`input-box__input input-box__input--${currentTheme}`}
            type='number'
            value={val}
            onChange={(e) =>
              setVal(trimFirstZero(e.target.value))
            }
          />
          <Button
            variant={variantButton}
            size='small'
            onClick={() => {
              setVal((prev: string) =>
                (Number(prev) - step).toString()
              );
            }}
          >
            -{step}
          </Button>
        </div>
      </div>
    </>
  );
};
