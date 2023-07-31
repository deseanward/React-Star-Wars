import React from 'react';
import {
	ActiveButton,
	DisabledButton,
	Button,
	PaginationContainer,
} from './pagination.styles';

const Pagination = ({ updatePage, currentpage }) => {
	const PrevButton = currentpage === 1 ? DisabledButton : Button;
	const NextButton = currentpage === 4 ? DisabledButton : Button;
	let PageButton = Button;

	const handleClick = e => {
		updatePage(e.target.id);
	};

	return (
		<PaginationContainer>
			<PrevButton
				id='prev'
				currentpage={currentpage}
				onClick={handleClick}>
				PREV
			</PrevButton>

			{currentpage === 1 ? (
				<ActiveButton>1</ActiveButton>
			) : (
				<Button id='1' onClick={handleClick}>
					1
				</Button>
			)}

			{currentpage === 2 ? (
				<ActiveButton>2</ActiveButton>
			) : (
				<Button id='2' onClick={handleClick}>
					2
				</Button>
			)}

			{currentpage === 3 ? (
				<ActiveButton>3</ActiveButton>
			) : (
				<Button id='3' onClick={handleClick}>
					3
				</Button>
			)}

			{currentpage === 4 ? (
				<ActiveButton>4</ActiveButton>
			) : (
				<Button id='4' onClick={handleClick}>
					4
				</Button>
			)}

			<NextButton
				id='next'
				currentpage={currentpage}
				onClick={handleClick}>
				NEXT
			</NextButton>
		</PaginationContainer>
	);
};

export default Pagination;
