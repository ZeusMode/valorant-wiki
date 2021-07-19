import React from 'react'
import Layout from '../../components/layout'
import Typography from '@material-ui/core/Typography'

export default class Home extends React.Component{

	render() {
		return(
		<Layout pageTitle="Home">
			<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>Valorant Wiki</Typography>
		</Layout>
		)
	}

}