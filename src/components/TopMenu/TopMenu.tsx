import React, { useRef } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { APP_CONTENT } from "../../constants/appConstants";
import { useAppSelector } from "../../store/hooks/redux";
import { SelectLanguage, SelectTheme } from "../.";
import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";

interface TopMenuPops {
  setSwitchCalc: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

export function TopMenu({ setSwitchCalc }: TopMenuPops) {
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

  const { currentLang, currentTheme } = useAppSelector(
    (state) => state.appReducer
  );
  //TODO fix compatibility Menu with dark-theme
  // https://stackoverflow.com/questions/61023797/how-to-change-the-color-of-menu-in-material-ui

  const theme = createTheme({
    palette: {
      mode:
        currentTheme === "white-theme" ? "light" : "dark",
    },
  });

  return (
    <div className={`app__top-menu`}>
      <ThemeProvider theme={theme}>
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
          //TODO theme
          className={`Menu Menu--${currentTheme}`}
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
        </Menu>
      </ThemeProvider>
    </div>
  );
}
