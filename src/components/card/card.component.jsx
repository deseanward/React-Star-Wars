import React from 'react';
import { CardContainer } from './card.styles';

const StarWarsCard = ({ship}) => {
	return (
		<CardContainer>
            <h3>{ship.name}</h3>
		</CardContainer>
	);
};

export default StarWarsCard;
