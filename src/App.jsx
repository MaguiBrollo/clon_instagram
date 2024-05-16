//Posteos de Isntagram
import "./App.css";
import { FaInstagramSquare } from "react-icons/fa";
import { Posteo } from "./components/Post/Posteo";
import { Historia } from "./components/Historia/Historia.jsx";
import { Carrusel } from "./components/Carrusel/Carrusel.jsx";

import { posteos } from "./utils/Constantes.js";
import { historias } from "./utils/Constantes.js";

function App() {
	return (
		<>
			<p className="instagram">
				<FaInstagramSquare />
				Instagram
			</p>

			<div className="carrusel">
				<Carrusel />
			</div>

			<div className="posteos">
				{posteos.map((post) => {
					return (
						<div key={post.id}>
							<Posteo posteo={post} />
						</div>
					);
				})}
			</div>
		</>
	);
}

export default App;
