import { useAppSelector } from "../../../../store/hooks/redux";
import { ALCO_CONTENT } from "../../../../store/reducer/constants/alcoConstants";
import { StateKeys } from "../../../../store/reducer/types/alcoTypes";

export const AlcoHeader = () => {
  const { currentLang } = useAppSelector(
    (state) => state.alcoReducer
  );
  return <h1>{ALCO_CONTENT[currentLang].alcoHeader}</h1>;
};
