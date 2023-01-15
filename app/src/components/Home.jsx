import React from 'react';
import Categories from './Categories';
import VideoContainer from './VideoContainer';

const Home = () => {
	return (
		<div className="grid grid-cols-6">
			<Categories />
			<VideoContainer />
		</div>
	);
};

export default Home;
