import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export const footer = (
	<div>
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://valorant-wiki.herokuapp.com/">Valorant-Wiki</Link>{' '}{new Date().getFullYear()}{'.'}
		</Typography>
		<Typography variant="body2" color="textSecondary" align="center">Valorant-Wiki is a non-official API and not endorsed by Riot Games in any way. </Typography>
		<Typography variant="body2" color="textSecondary" align="center">Riot Games, Valorant, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.</Typography>
		<Typography variant="body2" color="textSecondary" align="center">Content is provided by valorant-api.com with ❤️</Typography>
	</div>
);
