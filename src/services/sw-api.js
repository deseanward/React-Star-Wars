// Fetch all Starships from the SWAPI
export const getAllStarships = async req => {
    let starships = []
	const res = await fetch(req);
    const ships = await res.json();
    
    ships.results.forEach(ship => {
        starships.push(ship)
    })

    return starships;
    // console.log(ships)
};
