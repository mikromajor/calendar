import { useAppSelector } from "../../../../store/hooks/redux";
import { ALCO_CONTENT } from "../../../../constants/alcoConstants";

export const AlcoHeader = () => {
  const { currentLang, currentTheme } = useAppSelector(
    (state) => state.appReducer
  );

  return (
    <h1
      className={`alco-counter__header alco-counter__header--${currentTheme}`}
    >
      {ALCO_CONTENT[currentLang].alcoHeader}
    </h1>
  );
};
