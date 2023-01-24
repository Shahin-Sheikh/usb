import React from 'react';
import { ChargingStation, Home } from '@mui/icons-material';
import { Menu, MenuItem, Sidebar, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
const SmartPhone = () => {
	return (
		<Menu>
			{/* @TODO: Apply later other element */}
			<MenuItem icon={<Home />} component={<Link to={'/'} />}>
				Home {'/'} SmartPhone
			</MenuItem>
			<div>
				<h1>This is smartphone page</h1>
			</div>
		</Menu>
	);
};

export default SmartPhone;
