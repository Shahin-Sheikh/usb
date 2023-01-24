import { ChargingStation, Home } from '@mui/icons-material';
import LaptopIcon from '@mui/icons-material/Laptop';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import MouseIcon from '@mui/icons-material/Mouse';
import RouterIcon from '@mui/icons-material/Router';
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
				<Box sx={{ py: 2.5, px: '20px' }}>𝒹𝓇𝒾𝒷𝒷𝒷𝓁𝑒</Box>
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
								backgroundColor: '#DF417E',
								color: 'white',
							},
						},

						className: 'menu-item',
					}}
				>
					<SubMenu label="Charts" icon={<Home />}>
						<MenuItem
							icon={<ChargingStation />}
							component={<Link to={'/smartphone'} />}
						>
							Smartphone
						</MenuItem>
						<MenuItem icon={<LaptopIcon />} component={<Link to={'/#'} />}>
							Laptop
						</MenuItem>
						<MenuItem icon={<KeyboardIcon />} component={<Link to={'/#'} />}>
							Keyboard
						</MenuItem>
						<MenuItem icon={<MouseIcon />} component={<Link to={'/#'} />}>
							Mouse
						</MenuItem>
						<MenuItem icon={<RouterIcon />} component={<Link to={'/#'} />}>
							Router
						</MenuItem>
					</SubMenu>

					{/* @TODO: Apply later other element */}
					<MenuItem component={<Link to={'/documentation'} />}>
						{' '}
						Documentation{' '}
					</MenuItem>
					<MenuItem component={<Link to={'/#'} />}> Calendar </MenuItem>
					<MenuItem component={<Link to={'/#'} />}>
						{' '}
						Product Management{' '}
					</MenuItem>
					<MenuItem component={<Link to={'/#'} />}> Order Management </MenuItem>
					<MenuItem component={<Link to={'/#'} />}> Daily Orders </MenuItem>
					<MenuItem component={<Link to={'/#'} />}> Supplier Details </MenuItem>
					<MenuItem component={<Link to={'/#'} />}> User Analytics </MenuItem>
				</Menu>
			</Sidebar>
		</Box>
	);
};

export default React.memo(LeftSide);
