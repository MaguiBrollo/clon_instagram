import { useState } from "react";

import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";

import "./MeGusta.css";

/* ----------------------------------------------------- */
export const MeGusta = ({ megusta }) => {
	const { meGusta, guardado, cantMeGusta } = megusta;

	const [meGus, setMeGus] = useState(meGusta);
	const [cantMeGus, setCantMeGus] = useState(cantMeGusta);

	const cambiarMeGusta = () => {
		setMeGus((estado) => !estado);

		if (meGus) {
			setMeGus(false);
			setCantMeGus(cantMeGus - 1);
		} else {
			setMeGus(true);
			setCantMeGus(cantMeGus + 1);
		}
	};

	/* ------------ */
	return (
		<div className="megusta">
			<div className="megusta__izq">
				<div className="megusta__ppal">
					{meGus ? (
						<FaHeart
							className="megusta__corazon"
							style={{ cursor: "pointer", color: "red" }}
							onClick={cambiarMeGusta}
						/>
					) : (
						<FaRegHeart
							style={{ cursor: "pointer" }}
							onClick={cambiarMeGusta}
						/>
					)}
					<FaRegComment />
					<FiSend />
				</div>
				<div className="megusta__guardado">
					{guardado ? <FaBookmark /> : <FaRegBookmark />}
				</div>
			</div>

			<div className="megusta__cant-megusta">
				{cantMeGus === 0 ? (
					""
				) : (
					<p className="megusta__cant-gusta">{cantMeGus} Me Gusta</p>
				)}
			</div>
		</div>
	);
};
