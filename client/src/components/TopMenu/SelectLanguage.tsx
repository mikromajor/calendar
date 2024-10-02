import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { TOP_MENU_CONTENT } from "constants/userConstants";
import {
  useAppDispatch,
  useAppSelector,
} from "store/hooks/redux";
import { userActions } from "store/reducer/userReducer";
import { UserLanguages } from "types/userTypes";

export function SelectLanguage() {
  // customization
  const dispatch = useAppDispatch();
  const { currentLang } = useAppSelector(
    (state) => state.userReducer
  );
  const { changeLanguage } = userActions;
  const languages = Object.values(UserLanguages);

  //-------------------------//
  const [anchorEl, setAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClickListItem = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (language: UserLanguages) => {
    setAnchorEl(null);
    dispatch(changeLanguage(language));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <List component='nav' aria-label='Device settings'>
        <ListItemButton
          id='lock-button-language'
          aria-haspopup='listbox'
          aria-controls='lock-menu'
          aria-label='when device is locked'
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary={TOP_MENU_CONTENT[currentLang].lblLang}
            secondary={currentLang}
          />
        </ListItemButton>
      </List>
      <Menu
        id='lock-menu-language'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {languages.map((language) => (
          <MenuItem
            key={language}
            selected={language === currentLang}
            onClick={() => handleMenuItemClick(language)}
          >
            {language}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
