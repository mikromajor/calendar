import { useAppSelector } from "../../../../../store/hooks/redux";
import { ALCO_CONTENT } from "../../../../../constants/alcoConstants";
import { LangContentKeys } from "../../../../../types/alcoTypes";

type Props = {
  title: LangContentKeys;
};
export const BlockHeader = ({ title }: Props) => {
  const { currentLang } = useAppSelector(
    (state) => state.appReducer
  );
  return <h2>{ALCO_CONTENT[currentLang][title]}</h2>;
};
