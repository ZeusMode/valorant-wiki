import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Home from './pages/Home';
import Weapons from './pages/Weapons';
import Sprays from './pages/Sprays';
import Buddies from './pages/Buddies';
import Cards from './pages/Cards';
import AppsIcon from '@material-ui/icons/Apps';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-RPRKTXR9BH";
ReactGA.initialize(TRACKING_ID);

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
	ReactGA.set({ page: location.pathname }); // Update the user's current page
	ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function App() {
	return (
		<Router history={history}>
			<Route exact path="/">
				<Home />
			</Route>

			<Route exact path="/weapons">
				<Weapons />
			</Route>

			<Route exact path="/sprays">
				<Sprays />
			</Route>

			<Route exact path="/buddies">
				<Buddies />
			</Route>

			<Route exact path="/cards">
				<Cards />
			</Route>
						
		</Router>
	);
}

export default App;
