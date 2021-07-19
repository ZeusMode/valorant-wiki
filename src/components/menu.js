import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AppsIcon from '@material-ui/icons/Apps';

export const menu = (
	<div>
		<ListItem button component={Link} to="/">
			<ListItemIcon>
				<AppsIcon />
			</ListItemIcon>
			<ListItemText primary="Home" />
		</ListItem>
		<ListItem button component={Link} to="/weapons">
			<ListItemIcon>
				<AppsIcon />
			</ListItemIcon>
			<ListItemText primary="Weapons" />
		</ListItem>
		<ListItem button component={Link} to="/sprays">
			<ListItemIcon>
				<AppsIcon />
			</ListItemIcon>
			<ListItemText primary="Sprays" />
		</ListItem>
		<ListItem button component={Link} to="/buddies">
			<ListItemIcon>
				<AppsIcon />
			</ListItemIcon>
			<ListItemText primary="Buddies" />
		</ListItem>
		<ListItem button component={Link} to="/cards">
			<ListItemIcon>
				<AppsIcon />
			</ListItemIcon>
			<ListItemText primary="Cards" />
		</ListItem>
	</div>
);