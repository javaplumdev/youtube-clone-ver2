import { FiTrendingUp } from 'react-icons/fi';
import { BsCodeSlash, BsMusicNoteBeamed, BsBook } from 'react-icons/bs';
import { CgMediaPodcast } from 'react-icons/cg';
import { RiMovie2Line } from 'react-icons/ri';
import { GrGamepad, GrBitcoin } from 'react-icons/gr';
import { TbLivePhoto, TbGenderDemigirl } from 'react-icons/tb';
import { MdSportsSoccer, MdTheaterComedy } from 'react-icons/md';
import { GiLargeDress } from 'react-icons/gi';
import { CgGym } from 'react-icons/cg';

export const image = 'https://img.icons8.com/color/512/youtube-play.png';

export const categories = [
	{ name: 'New', icon: <FiTrendingUp size={30} className="icons" /> },
	{ name: 'Coding', icon: <BsCodeSlash size={30} className="icons" /> },
	{ name: 'Music', icon: <BsMusicNoteBeamed size={30} className="icons" /> },
	{ name: 'Education', icon: <BsBook size={30} className="icons" /> },
	{ name: 'Podcast', icon: <CgMediaPodcast size={30} className="icons" /> },
	{ name: 'Movie', icon: <RiMovie2Line size={30} className="icons" /> },
	{ name: 'Gaming', icon: <GrGamepad size={30} className="icons" /> },
	{ name: 'Live', icon: <TbLivePhoto size={30} className="icons" /> },
	{ name: 'Sport', icon: <MdSportsSoccer size={30} className="icons" /> },
	{ name: 'Fashion', icon: <GiLargeDress size={30} className="icons" /> },
	{ name: 'Beauty', icon: <TbGenderDemigirl size={30} className="icons" /> },
	{ name: 'Comedy', icon: <MdTheaterComedy size={30} className="icons" /> },
	{ name: 'Gym', icon: <CgGym size={30} className="icons" /> },
	{ name: 'Crypto', icon: <GrBitcoin size={30} className="icons" /> },
];
