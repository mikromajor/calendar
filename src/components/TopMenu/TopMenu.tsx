import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { APP_CONTENT } from "../../constants/appConstants";
import { useAppSelector } from "../../store/hooks/redux";
import { SelectLanguage } from "../.";

interface TopMenuPops {
  switchCalc: boolean;
  setSwitchCalc: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

export function TopMenu({
  switchCalc,
  setSwitchCalc,
}: TopMenuPops) {
  const [anchorEl, setAnchorEl] =
    React.useState<null | HTMLElement>(null);
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

  const { currentLang } = useAppSelector(
    (state) => state.appReducer
  );
  let theme = "white-theme";
  return (
    <div className={`app__menu app__menu--${theme}`}>
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
        <MenuItem onClick={handleChangeCalc}>
          {APP_CONTENT[currentLang].btnChangeCalc}
        </MenuItem>
        <MenuItem>
          <SelectLanguage handleClose={handleClose} />
        </MenuItem>
      </Menu>
    </div>
  );
}