import { useAppSelector } from "../../store/hooks/redux";
import { ALCO_CONTENT } from "../../store/reducer/constants/alcoConstants";

export const AlcoHeader = () => {
  const { currentLang } = useAppSelector(
    (state) => state.alcoReducer
  );
  return (
    <h1 className='calendar alcoHeader'>
      {ALCO_CONTENT[currentLang].alcoHeader}
    </h1>
  );
};
