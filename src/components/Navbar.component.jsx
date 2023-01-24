import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { blue } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import { useMenuCollapse } from '../context/MenuContext';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
	const theme = useTheme();
  const { collapseSidebar } = useMenuCollapse();
	const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
	const handleCloseUserMenu = () => setAnchorElUser(null);

	console.log(isSmallScreen);

	return (
		<Box
			sx={{
				display: 'block',
				width: '100%',
				height: '65px',
				background: 'rgba(255, 255, 255, 0.45)',
				backdropFilter: 'blur(21px) saturate(200%)',
				borderBottom: ' 1px solid rgba(209, 213, 219, 0.5)',
				boxShadow: '0px 10px 27px -16px rgba(0,0,0,0.1)',
			}}
		>
			<AppBar position="static" color="transparent" sx={{ height: '100%' }}>
				<Toolbar
					disableGutters
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						mx: 3,
					}}
				>
					<IconButton
						onClick={
							isSmallScreen
								? () => setIsDrawerOpen(true)
								: () => collapseSidebar()
						}
						size="large"
						edge="start"
						color="inherit"
						aria-label="logo"
					>
						<MenuIcon />
					</IconButton>
					<Drawer
						anchor="left"
						open={isDrawerOpen}
						onClose={() => setIsDrawerOpen(false)}
					>
						<Box p={2} width="250px" textAlign="center" role="presentation">
							<List>
								{['Inbox', 'Starred', 'Send email', 'Drafts'].map(
									(text, index) => (
										<ListItem key={text} disablePadding>
											<ListItemButton>
												<ListItemIcon>
													{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
												</ListItemIcon>
												<ListItemText primary={text} />
											</ListItemButton>
										</ListItem>
									)
								)}
							</List>
						</Box>
					</Drawer>

					<Box>
						<Tooltip title="Open settings">
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{ p: 0, border: `2px solid ${blue[700]}` }}
							>
								<Avatar
									alt="Remy Sharp"
									src="https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
									sx={{
										bgcolor: blue[500],
										width: '35px',
										height: '35px',
										objectFit: 'contain',
									}}
								/>
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: '45px' }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
export default Navbar;
