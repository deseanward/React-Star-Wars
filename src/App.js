import { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';

import './App.css';
import StarWarsCard from './components/card/card.component';

function App() {
	const [starships, setStarships] = useState(null);
	const [gotShips, setGotShips] = useState(false);

	// API call to get all of the starships upon page load
	useEffect(() => {
		async function getShips() {
			console.log('Fetching...');
			try {
				const ships = await getAllStarships(
					'https://swapi.dev/api/starships'
				);

				setStarships(ships);
			} catch (error) {
				console.log('Error fetching data');
			}
		}
		getShips();
	}, []);
	console.log(starships);

	return (
		<div className='App'>
			<header>
				<h1>STAR WARS STARSHIPS</h1>
			</header>

			<main>
				<div id='cards'>
					{starships ? (
						starships.map(ship => {
              return <StarWarsCard key={ship.name} ship={ship}  />
						})
					) : (
						<h1>Loading Starships...</h1>
					)}
				</div>
			</main>
		</div>
	);
}

export default App;
