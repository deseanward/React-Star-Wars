import React, { useState } from 'react';
import Modal from '../modal/modal.component';
import { Button, CardContainer } from './card.styles';

const StarWarsCard = ({ ship }) => {
	const [showModal, setShowModal] = useState(false);

	const handleOpen = e => {
		e.preventDefault();

		setShowModal(true);
		console.log(showModal);
	};

	const handleClose = e => {
		e.preventDefault();

		setShowModal(false);
		console.log(showModal);
	};

	return (
		<>
			<Modal
				id='myModal'
				ship={ship}
				show={showModal}
				hide={handleClose}
			/>
			<CardContainer>
				<h3>{ship.name}</h3>

				<Button onClick={handleOpen}>More Info</Button>
			</CardContainer>
		</>
	);
};

export default StarWarsCard;
