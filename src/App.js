import { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';

import './App.css';
import StarWarsCard from './components/card/card.component';
import Pagination from './components/pagination/pagination.component';
import Loading from './components/loading/loading.component';

function App() {
	const [starships, setStarships] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Handles The Pagination
  const updatePage = (page) => {
    if (page !== 'prev' && page !== 'next') setCurrentPage(Number(page))
    else if (page === 'next' && currentPage <= 4) {
      let nextPage = currentPage + 1;
      setCurrentPage(nextPage);
    } else if (currentPage >= 1) {
      let prevPage = currentPage - 1;
      setCurrentPage(prevPage)
    }
  }

	// API call to get all of the starships upon page load
  useEffect(() => {
    setStarships(null)
		async function getShips() {
			try {
				const ships = await getAllStarships(
					`https://swapi.dev/api/starships/?page=${currentPage}&offset=%24`
				);

				setStarships(ships);
			} catch (error) {
				console.log('Error fetching data: ', error);
			}
		}
		getShips();
  }, [currentPage]);

	return (
		<div className='App'>
			<header>
				<h1>STAR WARS STARSHIPS</h1>
			</header>

      <main>
        <Pagination updatePage={updatePage} currentpage={currentPage} />
				<div id='cards'>
					{starships ? (
						starships.map(ship => (
							<StarWarsCard key={ship.name} ship={ship} />
						))
					) : (
						<Loading />
					)}
				</div>
			</main>
		</div>
	);
}

export default App;
