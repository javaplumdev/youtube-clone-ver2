import React from 'react';
import Categories from './Categories';
import VideoContainer from './VideoContainer';

const Home = () => {
	return (
		<div className="grid md:grid-cols-10">
			<Categories />
			<VideoContainer />
		</div>
	);
};

export default Home;
