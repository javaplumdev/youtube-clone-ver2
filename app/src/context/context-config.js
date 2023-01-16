import React, { createContext, useState, useEffect } from 'react';

import axios from 'axios';

import { optionsForSearch } from '../utils/apiData';

export const ContextProvider = createContext();

export const ContextFunction = ({ children }) => {
	const [isActive, setIsActive] = useState('New');
	const [videos, setVideos] = useState(null);
	const [video, setVideo] = useState(null);

	const changeColor = (category) => {
		setIsActive(category);
	};

	const optionsForSearch = {
		method: 'GET',
		url: 'https://youtube-v31.p.rapidapi.com/search',
		params: {
			q: isActive,
			part: 'snippet,id',
			regionCode: 'US',
			maxResults: '20',
			order: 'date',
		},
		headers: {
			'X-RapidAPI-Key': 'a53153cd18msh33129cf52ef3e6ep1b5af9jsnc633fa5d7f8a',
			'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
		},
	};

	useEffect(() => {
		axios.request(optionsForSearch).then(function (response) {
			setVideos(response.data.items);
		});
	}, [isActive]);

	return (
		<ContextProvider.Provider
			value={{ isActive, setIsActive, changeColor, videos }}
		>
			{children}
		</ContextProvider.Provider>
	);
};
