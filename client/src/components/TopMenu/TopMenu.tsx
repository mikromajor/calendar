import { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { TOP_MENU_CONTENT } from "../../constants/userConstants";
import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks/redux";
import { getSalary } from "../../store/reducer/http/salaryActions";
import UserAuthBar from "./UserAuthBar/UserAuthBar";
import { SelectTheme } from "./SelectTheme";
import { SelectLanguage } from "./SelectLanguage";

interface TopMenuPops {
  setShowAlcoCalc: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

export function TopMenu({ setShowAlcoCalc }: TopMenuPops) {
  const dispatch = useAppDispatch();
  const { userReducer, salaryReducer } = useAppSelector(
    (state) => state
  );
  const { currentLang } = userReducer;
  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const { year, month } = salaryReducer;
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
    dispatch(getSalary({ year, month }));
  };

  const content = TOP_MENU_CONTENT[currentLang];
  return (
    <div className={`app__top-menu`}>
      <IconButton
        aria-label='more'
        id='long-button-top-menu'
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id='long-menu-top-menu'
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <SelectTheme />

        <MenuItem onClick={switchToAlcoCalc}>
          {content.goToAlcoCalc}
        </MenuItem>
        <MenuItem onClick={switchToSalary}>
          {content.goToSalary}
        </MenuItem>

        <SelectLanguage />
        <UserAuthBar />
      </Menu>
    </div>
  );
}
