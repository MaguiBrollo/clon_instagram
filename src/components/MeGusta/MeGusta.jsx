import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";

import "./MeGusta.css";

export const MeGusta = ({ megusta }) => {
	const { meGusta, guardado } = megusta;
	return (
		<div className="megusta">
			<div className="megusta__izq">
				{meGusta ? <FaHeart className="megusta__corazon" /> : <FaRegHeart />}
				<FaRegComment />
				<FiSend />
			</div>
			<div className="megusta__der">
				{guardado ? <FaBookmark /> : <FaRegBookmark />}
			</div>
		</div>
	);
};
