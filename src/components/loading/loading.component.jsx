import React from 'react';
import { LoadingContainer, LoadingImageContainer } from './loading.styles';

const Loading = () => {
	return (
		<LoadingContainer>
			<h2>Loading Starships</h2>

			<LoadingImageContainer>
				<img src='/assets/rocket.gif' alt='Loading' />
			</LoadingImageContainer>
		</LoadingContainer>
	);
};

export default Loading;
