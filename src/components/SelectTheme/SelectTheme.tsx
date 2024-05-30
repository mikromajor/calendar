import { AppThemes } from "../../types/appTypes";
import { APP_CONTENT } from "../../constants/appConstants";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { appActions } from "../../store/reducer/appReducer";
import React, { forwardRef } from "react";

interface SelectThemeProps {
  handleClose(): void;
}

export const SelectTheme = forwardRef(
  (
    { handleClose }: SelectThemeProps,
    ref: React.ForwardedRef<HTMLSelectElement | null>
  ) => {
    const { currentLang, currentTheme } = useAppSelector(
      (state) => state.appReducer
    );

    const dispatch = useAppDispatch();

    const { changeTheme } = appActions;

    const themesList = Object.values(AppThemes);
    const Options = themesList.map((theme, i) => (
      <option
        key={theme + i}
        value={theme}
        className={`select-lang__option select-lang__option--${currentTheme}`}
      >
        {theme}
      </option>
    ));

    const handleChangeTheme = (
      e: React.ChangeEvent<HTMLSelectElement>
    ) => {
      dispatch(
        changeTheme(e.currentTarget.value as AppThemes)
      );
      handleClose();
    };

    return (
      <div className='select-lang'>
        <label
          id='lblLang'
          className={`select-lang__label select-lang--${currentTheme}`}
        >
          {APP_CONTENT[currentLang].lblTheme}
        </label>
        <br />
        <select
          ref={ref}
          id='selectThemes'
          className={`select-lang__selector select-lang__selector--${currentTheme}`}
          name='select-lang__selector '
          defaultValue={currentLang}
          onChange={handleChangeTheme}
        >
          {Options}
        </select>
      </div>
    );
  }
);
