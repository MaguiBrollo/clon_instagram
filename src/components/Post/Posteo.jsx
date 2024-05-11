import { MeGusta } from "../MeGusta/MeGusta";

import "./Posteo.css";

export const Posteo = ({ posteo }) => {
	const { meGusta, guardado, cantMeGusta, comentario, imagen } = posteo;
	console.log(imagen);
	return (
		<div className="posteo__cont">
			Posteo
			<img className="posteo__img" src={imagen} alt="Imagen del post" />
			<MeGusta megusta={{ meGusta, guardado }} />
			<p>{meGusta}</p>
			<p className="posteo__cant-gusta">{cantMeGusta} Me Gusta</p>
			{comentario.map((com) => {
				return (
					<div className="posteo_coment" key={com.id}>
						<p>
							<span className="posteo__coment-us">{com.us} </span>
							{com.cmt}
						</p>
					</div>
				);
			})}
		</div>
	);
};
