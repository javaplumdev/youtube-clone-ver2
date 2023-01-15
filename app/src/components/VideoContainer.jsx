import React, { useContext } from 'react';

import { ContextProvider } from '../context/context-config';

const VideoContainer = () => {
	const { videos } = useContext(ContextProvider);

	console.log(videos);

	return (
		<div className="px-2 sm:col-span-6 md:col-span-8 bg-mainColor">
			<h1 className="mx-5 my-2 text-2xl text-white">Videos</h1>
			<div className="grid gap-y-11	gap-x-2.5	 md:grid-cols-2 lg:grid-cols-4 place-content-center">
				{videos?.map &&
					videos.map((item) => {
						return (
							<div key={item.id.videoId}>
								<img
									src={item.snippet.thumbnails.medium.url}
									alt={item.snippet.channelTitle}
									style={{ maxWidth: '300px', objectFit: 'cover' }}
								/>
								<p className="text-white font-bold mt-2">
									{item.snippet.channelTitle}
								</p>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default VideoContainer;
