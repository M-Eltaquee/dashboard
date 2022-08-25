import React, { useState } from 'react';
import SideNav from './components/sideNav/SideNav';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { ChevronLeft, Menu } from '@mui/icons-material';
import {
  CssBaseline,
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';

const drawerWidth = 240;
const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  backgroundColor: 'red',
  width: drawerWidth,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    whiteSpace: 'nowrape',
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeIn,
    }),
    overflow: 'hidden',
    ...(!open && {
      width: theme.spacing(9),
      transition: theme.transitions.create('width', {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.easeOut,
      }),
    }),
  },
}));
const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create('width', {
    duration: theme.transitions.duration.enteringScreen,
    easing: theme.transitions.easing.easeIn,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.easeOut,
    }),
  }),
}));

const theme = createTheme();
function App() {
  const [open, setOpen] = useState(true);
  const toggleDrawerHandler = () => {
    setOpen((prev) => !prev);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: theme.palette.primary.main }}>
        <CssBaseline />
        <StyledAppBar open={open}>
          <Toolbar>
            {!open && (
              <IconButton
                edge="start"
                onClick={toggleDrawerHandler}
                color="inherit"
                sx={{ ...(!open && { mr: theme.spacing(4) }) }}
              >
                <Menu />
              </IconButton>
            )}
            <Typography variant="h6" component={'h1'}>
              Dashboard
            </Typography>
          </Toolbar>
        </StyledAppBar>
        <StyledDrawer variant="permanent" open={open}>
          <Toolbar sx={{ justifyContent: 'flex-end' }}>
            {open && (
              <IconButton onClick={toggleDrawerHandler}>
                <ChevronLeft />
              </IconButton>
            )}
          </Toolbar>
          <Divider />
          <SideNav />
        </StyledDrawer>
      </Box>
    </ThemeProvider>
  );
}

export default App;
