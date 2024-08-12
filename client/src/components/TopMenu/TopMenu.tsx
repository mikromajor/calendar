import React, { useRef } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { APP_CONTENT } from "../../constants/appConstants";
import { useAppSelector } from "../../store/hooks/redux";
import { SelectTheme } from "./SelectTheme";
import UserAuthBar from "./UserAuthBar/UserAuthBar";
import { ChooseLanguage } from "../ui";
interface TopMenuPops {
  setShowAlcoCalc: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

export function TopMenu({ setShowAlcoCalc }: TopMenuPops) {
  const [anchorEl, setAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const selectLangsRef = useRef<HTMLSelectElement | null>(
    null
  );
  const selectThemeRef = useRef<HTMLSelectElement | null>(
    null
  );

  const open = Boolean(anchorEl);

  const handleClick = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const switchToAlcoCalc = () => {
    setShowAlcoCalc(true);
    setAnchorEl(null);
  };
  const switchToSalary = () => {
    setShowAlcoCalc(false);
    setAnchorEl(null);
  };

  const giveFocusSelectTheme = () => {
    selectThemeRef.current &&
      selectThemeRef.current.focus();
  };
  const giveFocusSelectLangs = () => {
    selectLangsRef.current &&
      selectLangsRef.current.focus();
  };

  const { currentLang } = useAppSelector(
    (state) => state.appReducer
  );

  return (
    <div className={`app__top-menu`}>
      <IconButton
        aria-label='more'
        id='long-button'
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id='long-menu'
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={giveFocusSelectTheme}>
          <SelectTheme
            handleClose={handleClose}
            ref={selectThemeRef}
          />
        </MenuItem>

        <MenuItem onClick={switchToAlcoCalc}>
          {APP_CONTENT[currentLang].goToAlcoCalc}
        </MenuItem>
        <MenuItem onClick={switchToSalary}>
          {APP_CONTENT[currentLang].goToSalary}
        </MenuItem>

        <ChooseLanguage />
        <UserAuthBar />
      </Menu>
    </div>
  );
}
