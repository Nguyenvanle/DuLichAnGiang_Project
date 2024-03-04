import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Email,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">dulichangiang@gmail.com</Typography>
          <Email />
          <Typography variant="h6">010-020-0340</Typography>
          <Phone />
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <Facebook />
          </IconButton>
          <IconButton color="inherit">
            <Instagram />
          </IconButton>
          <IconButton color="inherit">
            <Twitter />
          </IconButton>
          <IconButton color="inherit">
            <LinkedIn />
          </IconButton>
        </Toolbar>
      </AppBar>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Du Lịch An Giang
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit" onClick={handleClick}>
            Dịch Vụ
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Đặt vé</MenuItem>
            <MenuItem onClick={handleClose}>Cẩm nang</MenuItem>
            <MenuItem onClick={handleClose}>Địa điểm</MenuItem>
            <MenuItem onClick={handleClose}>Liên hệ</MenuItem>
          </Menu>
          <Button color="inherit">Trang Chủ</Button>
          <Button color="inherit">Giới Thiệu</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
