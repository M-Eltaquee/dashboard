import React, { Fragment } from 'react';
import { List, Box } from '@mui/material';
import SideNavItem from './SideNavItem';
import { sideNavItems } from './constants/sideNavItems';

const SideNav = () => {
  return (
    <List sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      {sideNavItems.map((navItem, index) => {
        return (
          <Fragment key={index}>
            {navItem.label === 'Sign Out' && <Box sx={{ flex: 1 }} />}
            <SideNavItem key={index} {...navItem}></SideNavItem>
          </Fragment>
        );
      })}
    </List>
  );
};

export default SideNav;
