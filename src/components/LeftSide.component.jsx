import { ChargingStation, Home } from '@mui/icons-material';
import { Box, Divider } from '@mui/material';
import { blue } from '@mui/material/colors';
import React from 'react';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { useMenuCollapse } from '../context/MenuContext';

const LeftSide = () => {
  const { collapsed } = useMenuCollapse();

  return (
    <Box
      sx={{
        display: {
          xs: 'none',
          md: 'block',
        },
        height: '100%',
        width: collapsed ? '60px' : '270px',
      }}
    >
      <Sidebar
        width={collapsed ? '60px' : '270px'}
        style={{ height: '100%' }}
        defaultCollapsed={collapsed}
        backgroundColor="#4884EE"
        // backgroundColor="#4884EE"
        rootStyles={{
          color: 'white',
        }}
      >
        {/* @TODO: CHange it Later  */}
        <Box sx={{ py: 2, px: '20px' }}>YOUR LOGO</Box>
        <Divider color="white" />
        {/* @TODO: You have to change the icon and Menu List */}
        {/* @TODO: Active menu item  -> Apply later */}
        <Menu
          menuItemStyles={{
            SubMenuExpandIcon: {
              color: 'white',
            },
            subMenuContent: {
              backgroundColor: blue[800],
            },
            button: {
              fontFamily: 'Poppins',
              fontSize: '14px',
              letterSpacing: '.3px',
              fontWeight: 400,
              '&:hover': {
                backgroundColor: blue[700],
                color: 'white',
              },
            },
          }}
        >
          <SubMenu label="Charts" icon={<Home />}>
            <MenuItem icon={<ChargingStation />} component={<Link to={'/'} />}>
              Smartphone
            </MenuItem>
          </SubMenu>
          {/* @TODO: Apply later other element */}
          <MenuItem component={<Link to={'/documentaion'}/>}> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default React.memo(LeftSide);
