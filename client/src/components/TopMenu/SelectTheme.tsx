import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { APP_CONTENT } from "../../constants/userConstants";
import {
  useAppDispatch,
  useAppSelector,
} from "../../store/hooks/redux";
import { appActions } from "../../store/reducer/userReducer";
import { AppThemes } from "../../types/appTypes";

export function SelectTheme() {
  //---- customization
  const dispatch = useAppDispatch();
  const { currentLang, currentTheme } = useAppSelector(
    (state) => state.userReducer
  );
  const { changeTheme } = appActions;

  const themes = Object.values(AppThemes);
  //-----------------//

  const [anchorEl, setAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (theme: AppThemes) => {
    setAnchorEl(null);
    dispatch(changeTheme(theme));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List
        component='nav'
        aria-label='Device settings'
        // sx={{ bgcolor: "background.paper" }}
      >
        <ListItemButton
          id='lock-button-theme'
          aria-haspopup='listbox'
          aria-controls='lock-menu'
          aria-label='when device is locked'
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary={APP_CONTENT[currentLang].lblTheme}
            secondary={
              APP_CONTENT[currentLang][currentTheme]
            }
          />
        </ListItemButton>
      </List>
      <Menu
        id='lock-menu-theme'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {themes.map((theme) => (
          <MenuItem
            key={theme}
            selected={theme === currentTheme}
            onClick={() => handleMenuItemClick(theme)}
          >
            {APP_CONTENT[currentLang][theme]}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
