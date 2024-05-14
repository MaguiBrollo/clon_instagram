import "./Historia.css";

export const Historia = ({historia}) => {
	const { nombreContacto, historiaFotoContacto, historiaVista } = historia;
	return (
		<>
			{historiaVista ? (
				<div className="historia__cont">
					<img
						className="historia__img historia__img--visto"
						src={historiaFotoContacto}
						alt="Foto Perfil"
					/>
					<p className="historia__nombre-visto">{nombreContacto}</p>
				</div>
			) : (
				<div className="historia__cont">
					<img
						className="historia__img historia__img--novisto"
						src={historiaFotoContacto}
						alt="Foto Perfil"
					/>
					<p className="historia__nombre-novisto">{nombreContacto}</p>
				</div>
			)}
		</>
	);
};
