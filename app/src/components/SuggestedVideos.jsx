import React from 'react';
import { Link } from 'react-router-dom';

const SuggestedVideos = ({ suggestedVideos }) => {
	console.log(suggestedVideos);

	return (
		<div>
			<p className="text-white mx-3">Suggested Videos</p>
			{suggestedVideos?.items.map &&
				suggestedVideos.items.map((item) => {
					return (
						<Link
							key={item.id.videoId}
							to={`/video/details/${item.id.videoId}`}
							className="hover:pointer rounded my-3 "
						>
							<div className="mt-5 px-3" style={{ maxWidth: '400px' }}>
								<img
									src={item.snippet.thumbnails.medium.url}
									alt={item.snippet.channelTitle}
									style={{
										objectFit: 'cover',
										overflow: 'hidden',
										width: '100%',
									}}
									className="rounded-lg"
								/>
								<p className="text-white font-bold text-md px-3 mt-2">
									{item.snippet.title}
								</p>
								<p className="text-slate-400 px-3">
									{item.snippet.channelTitle}
								</p>
							</div>
						</Link>
					);
				})}
		</div>
	);
};

export default SuggestedVideos;
