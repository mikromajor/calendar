import { useAppSelector } from "../../../../store/hooks/redux";
import { ALCO_CONTENT } from "../../../../constants/alcoConstants";

export const AlcoHeader = () => {
  const { currentLang } = useAppSelector(
    (state) => state.alcoReducer
  );
  return <h1>{ALCO_CONTENT[currentLang].alcoHeader}</h1>;
};
