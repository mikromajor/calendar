import React, { useRef, useState, useEffect } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { APP_CONTENT } from "../../constants/appConstants";
import { useAppSelector } from "../../store/hooks/redux";
import {
  SelectLanguage,
  SelectTheme,
  Login,
  Register,
  LogOut,
} from "./topMenuComponents";
import { isLoggedIn } from "../../store/session/session";
interface TopMenuPops {
  setSwitchCalc: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

export function TopMenu({ setSwitchCalc }: TopMenuPops) {
  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);
  const [showRegister, setShowRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

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
  const handleChangeCalc = () => {
    setSwitchCalc((switcher) => !switcher);
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

  useEffect(() => {
    //todo: fix
    setIsLogin(!!isLoggedIn());
  }, [setIsLogin]);

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

        <MenuItem onClick={handleChangeCalc}>
          {APP_CONTENT[currentLang].btnChangeCalc}
        </MenuItem>
        <MenuItem onClick={giveFocusSelectLangs}>
          <SelectLanguage
            handleClose={handleClose}
            ref={selectLangsRef}
          />
        </MenuItem>
        <MenuItem>
          {isLogin ? (
            <LogOut isLogin={setIsLogin} />
          ) : showRegister ? (
            <Register turnToRegister={setShowRegister} />
          ) : (
            <Login
              turnToRegister={setShowRegister}
              isLogin={setIsLogin}
            />
          )}
        </MenuItem>
      </Menu>
    </div>
  );
}
