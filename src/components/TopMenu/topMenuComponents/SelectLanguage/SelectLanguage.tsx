import { LANGUAGES_LIST } from "../../../../constants/appConstants";
import { AppLanguages } from "../../../../types/appTypes";
import { APP_CONTENT } from "../../../../constants/appConstants";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../store/hooks/redux";
import { appActions } from "../../../../store/reducer/appReducer";
import React, { forwardRef } from "react";
interface SelectLanguageProps {
  handleClose(): void;
}

export const SelectLanguage = forwardRef(
  (
    { handleClose }: SelectLanguageProps,
    ref: React.ForwardedRef<HTMLSelectElement | null>
  ) => {
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

    const handleChangeLanguage = (
      e: React.ChangeEvent<HTMLSelectElement>
    ) => {
      dispatch(
        changeLanguage(
          e.currentTarget.value as AppLanguages
        )
      );
      handleClose();
    };

    return (
      <div className='select-lang'>
        <label
          id='lblLang'
          className={`select-lang__label select-lang--${theme}`}
        >
          {APP_CONTENT[currentLang].lblLang}
        </label>
        <br />
        <select
          ref={ref}
          id='selectLanguages'
          className={`select-lang__selector select-lang__selector--${theme}`}
          name='select-lang__selector '
          defaultValue={currentLang}
          onChange={handleChangeLanguage}
        >
          {Options}
        </select>
      </div>
    );
  }
);
