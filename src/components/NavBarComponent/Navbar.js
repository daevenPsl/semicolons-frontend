import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import styles from './navbar.module.css'

const Navbar=()=> {
  let navigate = useNavigate();

  const {navbarPosition}= styles;

  const userName=localStorage.getItem('userEmail');

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    navigate("/login");
  };

  return (
    <Box className={navbarPosition}  sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Atmanirbhar {userName}
          </Typography>
          <Button onClick={handleLogout} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar