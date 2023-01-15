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
	{ name: 'New', icon: <FiTrendingUp /> },
	{ name: 'JS Mastery', icon: <BsCodeSlash /> },
	{ name: 'Coding', icon: <BsCodeSlash /> },
	{ name: 'ReactJS', icon: <BsCodeSlash /> },
	{ name: 'NextJS', icon: <BsCodeSlash /> },
	{ name: 'Music', icon: <BsMusicNoteBeamed /> },
	{ name: 'Education', icon: <BsBook /> },
	{ name: 'Podcast', icon: <CgMediaPodcast /> },
	{ name: 'Movie', icon: <RiMovie2Line /> },
	{ name: 'Gaming', icon: <GrGamepad /> },
	{ name: 'Live', icon: <TbLivePhoto /> },
	{ name: 'Sport', icon: <MdSportsSoccer /> },
	{ name: 'Fashion', icon: <GiLargeDress /> },
	{ name: 'Beauty', icon: <TbGenderDemigirl /> },
	{ name: 'Comedy', icon: <MdTheaterComedy /> },
	{ name: 'Gym', icon: <CgGym /> },
	{ name: 'Crypto', icon: <GrBitcoin /> },
];
