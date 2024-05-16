//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { historias } from "../../utils/Constantes";
import { Historia } from "../Historia/Historia";

export const Carrusel = () => {
	return (
		<Splide
			aria-label="Carrusel de historias"
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "red",
			}}
			options={{
				start: 0, // índice de inicio
				rewind: true, //si se rebobina
				rewindByDrag: true, //mover arrastrando

				pagination: false,

				type: "slide", //dejar slide
				width: "700px",
				arrows: "true", //Determina si crear/buscar flechas o no
				//autoplay: "true", //reproducción automática o no
				keyborad: "global", //habilita atajos teclado
				perPage: 8, //número de diapositivas que se mostrarán en una página.
				perMove: 2, //número de diapositivas que se moverán a la vez
				drag: "free", //si se permite al usuario arrastrar el carrusel o no
			}}
		>
			{historias.map((hist) => {
				return (
					<SplideSlide key={hist.id}>
						<Historia historia={hist} />
					</SplideSlide>
				);
			})}
		</Splide>
	);
};
