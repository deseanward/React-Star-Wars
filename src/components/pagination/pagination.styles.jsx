import styled from 'styled-components';

export const PaginationContainer = styled.div`
	/* height: 4em; */
	/* width: 40em; */
	max-width: 90%;
	display: flex;
	justify-content: space-evenly;
	border: 1px solid black;
	border-radius: 0.5em;
	margin-bottom: 1em;

`;

export const Button = styled.div`
	padding: 1em 2em;
	
	.active {
		background-color: #2f4f4f;
		color: white;
	}

	&:hover {
		background-color: #2f4f4f;
		color: white;
		cursor: pointer;
	}

	&:active {
		background-color: gainsboro;
		color: black;
	}
`;

export const ActiveButton = styled(Button)`
	background-color: #2f4f4f;
	color: white;
`;

export const DisabledButton = styled(Button)`
	background-color: gainsboro;
	color: gray;
	pointer-events: none;
`;
