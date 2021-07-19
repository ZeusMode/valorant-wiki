import React from 'react'
import Layout from '../../components/layout'
import Sprays from '../../utils/sprays'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = theme => ({
	icon: {
		marginRight: theme.spacing(2),
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
		backgroundSize: 'contain',
	},
	cardContent: {
		flexGrow: 1,
	},
	cardPrice: {
		color: '#ff0000',
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(6),
	},
});

class SprayPage extends React.PureComponent {
	
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			sprays: []
		}
	}

	componentDidMount() {
		this.load()
	}

	async load() {
		this.setState({ loading: true })
		await Promise.all([this.loadSprays()])
		this.setState({ loading: false })
	}

	async loadSprays() {
		try {
			const sprays = await Sprays.get()
			this.setState({ sprays: sprays.data, templateError: '' })
		} catch (e) {
			console.error(e)
			this.setState({ templateError: 'Ops! Houve um erro.' })
		}
	}

	render() {
		const { classes } = this.props;
		return(
		<Layout pageTitle="Sprays">
			<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>Sprays</Typography>
			<Grid container spacing={4}>
				{this.state.sprays.map((card) => (
					<Grid item key={card} xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardMedia
								className={classes.cardMedia}
								image={card.displayIcon}
								title={card.displayName}
							/>
							<CardContent className={classes.cardContent}>
								<Typography gutterBottom variant="h5" component="h2">{card.displayName}</Typography>
							</CardContent>
							<CardActions>
								<Button size="small" color="primary">View details</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Layout>
		)
	}
}

export default withStyles(useStyles)(SprayPage)