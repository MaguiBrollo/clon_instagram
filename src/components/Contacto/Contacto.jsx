import "./Contacto.css";

/* ----------------------------------------------------- */
export const Contacto = ({ contacto }) => {
	const { fotoContacto, nombreContacto, desde, historiaVista } = contacto;

	/* ------------ */
	return (
		<div className="contacto__cont">
			{historiaVista ? (
				<img className="contacto__img" src={fotoContacto} alt="Logo contacto" />
			) : (
				<img
					className="contacto__img contacto__img--visto "
					src={fotoContacto}
					alt="Logo contacto"
				/>
			)}
			<p className="contacto__nombre">{nombreContacto}</p>
			<p className="contacto__desde"> * {desde}</p>
		</div>
	);
};
