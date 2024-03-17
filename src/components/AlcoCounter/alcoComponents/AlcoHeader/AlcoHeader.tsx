import { useAppSelector } from "../../../../store/hooks/redux";
import { ALCO_CONTENT } from "../../../../constants/alcoConstants";

export const AlcoHeader = () => {
  const { currentLang } = useAppSelector(
    (state) => state.appReducer
  );
  let theme = "white-theme";
  return (
    <h1
      className={`alco-counter__header alco-counter__header--${theme}`}
    >
      {ALCO_CONTENT[currentLang].alcoHeader}
    </h1>
  );
};
