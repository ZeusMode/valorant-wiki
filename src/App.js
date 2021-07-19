import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Weapons from './pages/Weapons';
import Sprays from './pages/Sprays';
import Buddies from './pages/Buddies';
import Cards from './pages/Cards';

function App() {
	return (
		<Router>
			
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
