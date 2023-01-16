import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ContextProvider } from '../context/context-config';
import axios from 'axios';

const VideoDetails = () => {
	const { id } = useParams();

	const { video } = useContext(ContextProvider);

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
		axios
			.request(optionsVideo)
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});

		axios
			.request(optionsComments)
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});

		axios
			.request(optionsSuggestedVideos)
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	}, []);

	return <div className="container mx-auto">VideoDetails</div>;
};

export default VideoDetails;
