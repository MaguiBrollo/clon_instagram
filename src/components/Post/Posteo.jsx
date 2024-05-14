import { MeGusta } from "../MeGusta/MeGusta";
import { Contacto } from "../Contacto/Contacto";

import "./Posteo.css";

export const Posteo = ({ posteo }) => {
	const {
		fotoContacto,
		nombreContacto,
		desde,
		historiaVista,
		meGusta,
		guardado,
		cantMeGusta,
		comentario,
		imagen,
	} = posteo;
	return (
		<div className="posteo__cont">
			<Contacto
				contacto={{ fotoContacto, nombreContacto, desde, historiaVista }}
			/>
			<img className="posteo__img" src={imagen} alt="Imagen del post" />
			<MeGusta megusta={{ meGusta, guardado }} />
			{cantMeGusta === 0 ? (
				""
			) : (
				<p className="posteo__cant-gusta">{cantMeGusta} Me Gusta</p>
			)}

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
