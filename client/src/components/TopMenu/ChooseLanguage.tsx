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
import { AppLanguages } from "../../types/appTypes";

export function ChooseLanguage() {
  // customization
  const dispatch = useAppDispatch();
  const { currentLang } = useAppSelector(
    (state) => state.appReducer
  );
  const { changeLanguage } = appActions;

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
    dispatch(
      changeLanguage(LANGUAGES_LIST[index] as AppLanguages)
    );
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <List
        component='nav'
        aria-label='Device settings'
        // sx={{ bgcolor: "background.paper" }}
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
            primary={APP_CONTENT[currentLang].lblLang}
            secondary={LANGUAGES_LIST[selectedIndex]}
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
        {LANGUAGES_LIST.map((language, index) => (
          <MenuItem
            key={language}
            // disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => {
              handleMenuItemClick(event, index);
            }}
          >
            {language}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
