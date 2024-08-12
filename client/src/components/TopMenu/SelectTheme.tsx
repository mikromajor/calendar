import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {
  LANGUAGES_LIST,
  APP_CONTENT,
} from "../../constants/appConstants";
import {
  useAppDispatch,
  useAppSelector,
} from "../../store/hooks/redux";
import { appActions } from "../../store/reducer/appReducer";
import {
  AppLanguages,
  AppThemes,
} from "../../types/appTypes";

//TODO
const themes = [AppThemes.DARK, AppThemes.WHITE];

export function SelectTheme() {
  // customization
  const dispatch = useAppDispatch();
  const { currentLang } = useAppSelector(
    (state) => state.appReducer
  );
  const { changeTheme } = appActions;
  //
  const [anchorEl, setAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] =
    React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    dispatch(changeTheme(themes[index]));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List
        component='nav'
        aria-label='Device settings'
        sx={{ bgcolor: "background.paper" }}
      >
        <ListItemButton
          id='lock-button'
          aria-haspopup='listbox'
          aria-controls='lock-menu'
          aria-label='when device is locked'
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary={APP_CONTENT[currentLang].lblTheme}
            secondary={themes[selectedIndex]}
          />
        </ListItemButton>
      </List>
      <Menu
        id='lock-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {themes.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) =>
              handleMenuItemClick(event, index)
            }
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
