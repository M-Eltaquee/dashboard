import React, { Fragment, useEffect, useState } from 'react';
import {
  Avatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { useHistory, useLocation } from 'react-router-dom';
import { ThemeContext, useTheme } from '@emotion/react';
import { duration, styled } from '@mui/material/styles';

const StyledAvatar = styled(Avatar, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ theme, active }) => ({
  width: 30,
  height: 30,
  position: 'absolute',
  top: theme.spacing(1),
  ...(!active && {
    opacity: 0,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.leavingScreen,
      easing: theme.transitions.easing.easeOut,
    }),
  }),
  ...(active && {
    opacity: 1,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.easeIn,
    }),
  }),
}));
const SideNavItem = ({ label, path, icon, activeIcon }) => {
  const [active, setActive] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const clickHandler = () => {
    history.replace(path);
  };
  const theme = useTheme();
  useEffect(() => {
    if (location.pathname === path) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [location, path]);
  return (
    <ListItemButton
      onClick={clickHandler}
      sx={{ position: 'relative', flexGrow: 0 }}
    >
      <ListItemIcon>
        <StyledAvatar
          src={icon}
          sizes="small"
          variant="square"
          active={!active}
        />
        <StyledAvatar
          src={activeIcon}
          sizes="small"
          variant="square"
          active={active}
        />
      </ListItemIcon>
      <ListItemText
        sx={{ '& .MuiListItemText-primary': { whiteSpace: 'nowrap' } }}
      >
        {label}
      </ListItemText>
    </ListItemButton>
  );
};

export default SideNavItem;
