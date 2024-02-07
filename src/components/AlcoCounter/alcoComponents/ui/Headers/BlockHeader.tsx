import { useAppSelector } from "../../../../../store/hooks/redux";
import { ALCO_CONTENT } from "../../../../../store/reducer/constants/alcoConstants";
import { AlcoContentLangData } from "../../../../../store/reducer/types/alcoTypes";

type BlockHeaderProps = {
  title: AlcoContentLangData;
};
export const BlockHeader = ({
  title,
}: BlockHeaderProps) => {
  const { currentLang } = useAppSelector(
    (state) => state.alcoReducer
  );
  return <h2>{ALCO_CONTENT[currentLang][title]}</h2>;
};
