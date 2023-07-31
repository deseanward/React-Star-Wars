import React from 'react';
import { ModalButton, ModalContent, ModalOverLay } from './modal.styles';

const Modal = ({ ship, show, hide }) => {
	return (
		<ModalOverLay show={show}>
			<ModalContent show={show}>
				<h2>{ship.name}</h2>
				<hr />

				<div id='info'>
					<p>Model: {ship.model}</p>
					<p>Manufacturer: {ship.manufacturer}</p>
					<p>Capacity: {ship.cargo_capacity}</p>
					<p>Cost (in credits): {ship.cost_in_credits}</p>
				</div>
				<ModalButton ship={ship} onClick={hide}>
					Close
				</ModalButton>
			</ModalContent>
		</ModalOverLay>
	);
};

export default Modal;
