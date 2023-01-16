import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ContextProvider } from '../context/context-config';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { image } from '../utils/data';
import SuggestedVideos from './SuggestedVideos';
import ReadMore from './ReadMore';

const VideoDetails = () => {
	const { id } = useParams();

	const [video, setVideo] = useState(null);
	const [comments, setComments] = useState(null);
	const [suggestedVideos, setSuggestedVideos] = useState(null);
	const [loadCount, setLoadCount] = useState(5);

	const optionsVideo = {
		method: 'GET',
		url: 'https://youtube-v31.p.rapidapi.com/videos',
		params: { part: 'contentDetails,snippet,statistics', id: id },
		headers: {
			'X-RapidAPI-Key': 'a53153cd18msh33129cf52ef3e6ep1b5af9jsnc633fa5d7f8a',
			'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
		},
	};

	const optionsComments = {
		method: 'GET',
		url: 'https://youtube-v31.p.rapidapi.com/commentThreads',
		params: { part: 'snippet', videoId: id, maxResults: '10' },
		headers: {
			'X-RapidAPI-Key': 'a53153cd18msh33129cf52ef3e6ep1b5af9jsnc633fa5d7f8a',
			'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
		},
	};

	const optionsSuggestedVideos = {
		method: 'GET',
		url: 'https://youtube-v31.p.rapidapi.com/search',
		params: {
			relatedToVideoId: id,
			part: 'id,snippet',
			type: 'video',
			maxResults: '10',
		},
		headers: {
			'X-RapidAPI-Key': 'a53153cd18msh33129cf52ef3e6ep1b5af9jsnc633fa5d7f8a',
			'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
		},
	};

	useEffect(() => {
		axios.request(optionsVideo).then(function (response) {
			setVideo(response.data.items[0]);
		});

		axios.request(optionsComments).then(function (response) {
			setComments(response.data);
		});

		axios.request(optionsSuggestedVideos).then(function (response) {
			setSuggestedVideos(response.data);
		});
	}, [id]);

	if (!video?.snippet) return console.log('Loading');

	const {
		snippet: { title, channelId, channelTitle, description },
		statistics: { viewCount, likeCount },
	} = video;

	const addLoadCount = () => {
		setLoadCount((prevState) => prevState + 3);
	};

	const CommentComponent = () => {
		return (
			<div className="text-white ">
				{comments.items.length > 0 ? (
					<p className="text-lg">{loadCount} comments</p>
				) : (
					console.log('Hi')
				)}

				{comments?.items.map &&
					comments.items.slice(0, loadCount).map((item) => {
						return (
							<div
								key={item.snippet.topLevelComment.snippet.authorDisplayName}
								className="flex my-3 items-center"
							>
								<img
									src={
										item.snippet.topLevelComment.snippet.authorProfileImageUrl
									}
									className="rounded-full h-12"
								/>
								<div className="ml-3">
									<p className="font-bold my-2">
										{item.snippet.topLevelComment.snippet.authorDisplayName}
									</p>
									<p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
								</div>
							</div>
						);
					})}

				{comments.items.length > 0 ? (
					<p
						onClick={() => addLoadCount()}
						className="hover:cursor-pointer font-bold"
					>
						See more
					</p>
				) : (
					<p>No comments</p>
				)}
			</div>
		);
	};

	return (
		<div className=" bg-mainColor">
			<div className="container mx-auto grid md:grid-cols-12 gap-2">
				<div className="sm:col-span-12 md:col-span-8">
					<ReactPlayer
						url={`https://www.youtube.com/watch?v=${id}`}
						playing="true"
						className="react-player"
						controls
					/>

					<div className="m-3">
						<p className="md:col-span-4 font-bold text-white my-3">{title}</p>
						<div className="flex mb-3">
							<img
								src={image}
								alt={title}
								style={{ maxWidth: '45px' }}
								className="rounded-full"
							/>
							<p className="text-white ml-3">{channelTitle}</p>
						</div>
						<div className="text-white bg-descColor p-3 rounded-lg">
							<p className="font-bold">
								{' '}
								{parseInt(viewCount).toLocaleString()} views
							</p>
							<ReadMore>
								<p>{description}</p>
							</ReadMore>
						</div>
						<div className="container mx-auto mt-5">
							<CommentComponent />
						</div>
					</div>
				</div>
				<div className="sm:col-span-12 md:col-span-4 ">
					<SuggestedVideos suggestedVideos={suggestedVideos} />
				</div>
			</div>
		</div>
	);
};

export default VideoDetails;
