import React from 'react';
import { image } from '../utils/data';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="bg-mainColor text-white">
			<div className="container mx-auto flex justify-between items-center py-2">
				<Link to="/home">
					<img src={image} alt={image} style={{ maxWidth: '50px' }} />
				</Link>

				<div className="flex items-center">
					<input
						type="text"
						className="border border-gray-400 bg-mainColor px-3 py-2 rounded w-full"
						placeholder="Search"
					/>
					<button className="bg-button px-4 py-3 rounded mx-2">
						<BsSearch size={'20'} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
