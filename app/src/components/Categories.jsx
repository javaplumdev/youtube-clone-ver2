import React, { useContext } from 'react';
import { categories } from '../utils/data.js';

import { ContextProvider } from '../context/context-config';

const Categories = () => {
	const { isActive, setIsActive, changeColor } = useContext(ContextProvider);

	return (
		<div
			className="sidebar flex sm:flex-row md:flex-col bg-mainColor px-4 md:h-screen w-100 sm:col-span-6 md:col-span-2"
			style={{ overflow: 'auto', position: 'sticky' }}
		>
			<h1 className="hidden md:block text-2xl text-white">Categories</h1>
			{categories.map((item) => {
				return (
					<div
						key={item.name}
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
