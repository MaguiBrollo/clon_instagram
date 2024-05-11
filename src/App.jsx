import { Posteo } from "./components/Post/Posteo";

import img1 from "./assets/imagenes/montania.jpg";
import img2 from "./assets/imagenes/comida1.jpg";
import "./App.css";


const posteos = [
	{
		id: 1,
		logoUs: "",
		nombreUs: "lorena.126",
		desde: "2hs",
		meGusta: false,
		guardado: true,
		cantMeGusta: 100,
		comentario: [
			{
				id: 1,
				us: "@magui",
				cmt: "Qué lindo lugar, que la pases re lindo, te lo merecés. Belleza de mujer",
			},
			{ id: 2, us: "@aldana", cmt: "Qué seas muy feliz" },
			{ id: 3, us: "@cintia", cmt: "Bello paisaje" },
		],
		imagen: img1,
	},
	{
		id: 2,
		logoUs: "",
		nombreUs: "maria.solita",
		desde: "1d",
		meGusta: true,
		guardado: false,
		cantMeGusta: 10,
		comentario: [
			{ id: 1, us: "@rosa", cmt: "Quién es el cocinero?" },
			{
				id: 2,
				us: "@aldana",
				cmt: "Me invitás? hoy no tengo que comer, y eso se ve buenísimo. Daleee!!!",
			},
		],
		imagen: img2,
	},
];

function App() {
	return (
		<>
			<p className="">Instagram</p>

			<div>
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
