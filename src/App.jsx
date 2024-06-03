//Posteos de Instagram
import { Posteo } from "./components/Post/Posteo";
import { Carrusel } from "./components/Carrusel/Carrusel.jsx";
import { posteos } from "./utils/Constantes.js";

import "./App.css";

function App({usuarioNombre}) {
	return (
		<>
			<p className="instagram">
				<img
					className="instagram__logo"
					src="../../src/assets/imagenes/instg.png"
					alt="Logo Instagram"
				/>
				{usuarioNombre}
			</p>

			<div className="carrusel">
				<Carrusel />
			</div>

			<div className="posteos">
				{posteos.map((post) => {
					return <Posteo posteo={post} key={post.id} />;
				})}
			</div>
		</>
	);
}

export default App;
