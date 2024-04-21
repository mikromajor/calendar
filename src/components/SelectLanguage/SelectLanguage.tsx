import { LANGUAGES_LIST } from "../../constants/appConstants";
import { AppLanguages } from "../../types/appTypes";
import { APP_CONTENT } from "../../constants/appConstants";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { appActions } from "../../store/reducer/appReducer";

interface SelectLanguageProps {
  handleClose(): void;
}

export const SelectLanguage = ({
  handleClose,
}: SelectLanguageProps) => {
  const currentLang = useAppSelector(
    (state) => state.appReducer.currentLang
  );
  const dispatch = useAppDispatch();

  const { changeLanguage } = appActions;
  let theme = "white-theme";
  const Options = LANGUAGES_LIST.map((langName, i) => (
    <option
      key={langName + i}
      value={langName}
      className={`select-lang__option select-lang__option--${theme}`}
    >
      {langName}
    </option>
  ));

  return (
    <div className='select-lang'>
      <label
        id='lblLang'
        className={`select-lang__label select-lang--${theme}`}
      >
        {APP_CONTENT[currentLang].lblLang}
        <select
          className={`select-lang__selector select-lang__selector--${theme}`}
          id='LANGS'
          defaultValue={currentLang}
          onChange={(e) => {
            dispatch(
              changeLanguage(
                e.currentTarget.value as AppLanguages
              )
            );
            handleClose();
          }}
        >
          {Options}
        </select>
      </label>
    </div>
  );
};
