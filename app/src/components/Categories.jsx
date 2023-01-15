import React, { useState } from 'react';
import { categories } from '../utils/data.js';

const Categories = () => {
	const [isActive, setIsActive] = useState('New');

	const changeColor = (category) => {
		setIsActive(category);
	};

	return (
		<div
			className="flex flex-col bg-mainColor px-4"
			style={{ overflow: 'auto', height: '100vh' }}
		>
			<h1 className="my-2 text-2xl text-white">Categories</h1>
			{categories.map((item) => {
				return (
					<div
						key={item.id}
						style={{ width: 'auto' }}
						className={
							isActive == item.name
								? `bg-ytMainColor my-2 text flex items-center p-2 rounded hover:bg-ytMainColor cursor-pointer`
								: `my-2 text flex items-center p-2 rounded hover:bg-ytMainColor cursor-pointer`
						}
						onClick={() => changeColor(item.name)}
					>
						<div className="text-white">{item.icon}</div>{' '}
						<p className="ml-3 text-white">{item.name}</p>
					</div>
				);
			})}
		</div>
	);
};

export default Categories;
