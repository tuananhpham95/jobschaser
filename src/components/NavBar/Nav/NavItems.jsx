import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useState } from "react";
const NavItems = ({ id, labels = [], btn_title, endIcon }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        // id="basic-button-yrke"
        id={id}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={endIcon}
      >
        {btn_title}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": { id },
        }}
      >
        {labels.map((itemLabel, index) => (
          <MenuItem key={index} onClick={handleClose}>
            {itemLabel}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default NavItems;
