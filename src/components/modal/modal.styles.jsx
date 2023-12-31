import styled from 'styled-components';

export const ModalOverLay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	/* display: ${({ show }) => (show === 'true' ? 'flex' : 'none')}; */
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.9);
	width: 100vw;
	height: 100vh;
	/* height: ${props => (props.show === 'true' ? '100vh' : '0')}; */
	transform: scale(${props => (props.show === 'true' ? '1' : '0.1')});
	opacity: ${props => (props.show === 'true' ? '1' : '0')};
	overflow: hidden;

	transition: all 0.3s ease-in-out;
	/* transition-delay: 0.3s; */
`;

export const ModalContent = styled.div`
	width: 80%;
	max-width: 30em;
	/* height: fit-content; */
	background-color: #2f4f4f;
	color: white;
	border-radius: 1em;
	padding: 1em 2em 1.5em;
	display: flex;
	flex-direction: column;
	opacity: ${props => (props.show === 'true' ? '1' : '0')};
	transform: scale(${props => (props.show === 'true' ? '1' : '0.2')});

	transition: all 0.3s ease-in-out;
	transition-delay: 0.2s;

	hr {
		margin-bottom: 1em;
	}

	p {
		margin-bottom: 0.25em;
	}

	#info {
		margin-bottom: 2em;
	}
`;

export const ModalButton = styled.button`
	position: relative;
	/* width: fit-content; */
	padding: 0.5em;
	border-radius: 0.5em;
	/* top: ${props => (props.ship.name === 'Death Star' ? '5em' : '7em')}; */
	cursor: pointer;
`;
