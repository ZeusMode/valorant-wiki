import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';

export const menu = (
	<div>
		<ListItem button component={Link} to="/">
			<ListItemText primary="Home" />
		</ListItem>
		<ListItem button component={Link} to="/weapons">
			<ListItemText primary="Weapons" />
		</ListItem>
		<ListItem button component={Link} to="/sprays">
			<ListItemText primary="Sprays" />
		</ListItem>
		<ListItem button component={Link} to="/buddies">
			<ListItemText primary="Buddies" />
		</ListItem>
		<ListItem button component={Link} to="/cards">
			<ListItemText primary="Cards" />
		</ListItem>
	</div>
);