import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppContext } from '../AppContext';

export default function ButtonAppBar() {
  const { isLoggedin, handleOpenLogIn, handleCloseLogIn } = useContext(AppContext);

  const handleLoginClick = () => {
    handleOpenLogIn();
  }

  const handleLogoutClick = () => {
    handleCloseLogIn();
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
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
            JOBS
          </Typography>
          {(isLoggedin)
            ?
            (
              <Button color="inherit" onClick={handleLogoutClick}>Name Logout</Button>
            )
            :
            (<Button color="inherit" onClick={handleLoginClick}>Login</Button>)}

        </Toolbar>
      </AppBar>

    </Box>
  );
}
