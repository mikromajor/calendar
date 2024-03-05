import { LIST_OF_LANGUAGES } from "../../constants/appConstants";
import { APP_CONTENT } from "../../constants/appConstants";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { appActions } from "./../../store/reducer/appReducer";
import { Languages } from "../../types/appTypes";

export const SelectLanguage = () => {
  const currentLang = useAppSelector(
    (state) => state.appReducer.currentLang
  );
  const dispatch = useAppDispatch();

  const { changeLanguage } = appActions;

  const Options = LIST_OF_LANGUAGES.map((langName, i) => (
    <option key={langName + i} value={langName}>
      {langName}
    </option>
  ));

  return (
    <div className='selectLang'>
      <label id='lblLang'>
        {APP_CONTENT[currentLang].lblLang}
        <select
          id='LANGS'
          defaultValue={currentLang}
          onChange={(e) => {
            dispatch(
              changeLanguage(
                e.currentTarget.value as Languages
              )
            );
          }}
        >
          {Options}
        </select>
      </label>
    </div>
  );
};
