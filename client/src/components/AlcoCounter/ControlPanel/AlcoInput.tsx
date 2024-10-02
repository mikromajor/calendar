import { Button } from "@mui/material";
import { trimFirstZero } from "store/reducer/alcoHandlers";
import { useAppSelector } from "store/hooks/redux";
import { ALCO_CONTENT } from "constants/alcoConstants";
import { UserThemes } from "types/userTypes";

type AlcoInputProps = {
  val: string;
  step: number;
  setVal: React.Dispatch<React.SetStateAction<string>>;
  role: "volume" | "percent";
};

export const AlcoInput = ({
  val,
  step,
  setVal,
  role,
}: AlcoInputProps) => {
  const { currentLang, currentTheme } = useAppSelector(
    (state) => state.userReducer
  );
  const content = ALCO_CONTENT[currentLang];
  const label =
    role === "percent"
      ? content.lblPercent
      : content.lblVolume;

  const variantButton =
    currentTheme === UserThemes.WHITE
      ? "outlined"
      : "contained";

  return (
    <>
      <div className='alco-input'>
        <p id={label + role} className='alco-input__label'>
          {label}
        </p>
        <div className='alco-input__wrap'>
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
            className={`alco-input__input alco-input__input--${currentTheme}`}
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
