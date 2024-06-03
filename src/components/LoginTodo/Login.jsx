/* ============================== */
// Este formulario está hecho con
//      -  React
//      -  Chakra
/* ============================== */

import { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { LoginForm } from "./LoginForm.jsx";
import { CuentaNueva } from "./CuentaNueva.jsx";

import App from "../../App.jsx";

/* CAMBIA atributos por defecto de los input de chakra */
import { extendTheme } from "@chakra-ui/react";
const components = {
	Input: {
		baseStyle: {
			field: {
				fontWeight: "300",
				// textTransform: "uppercase",
			},
		},
		variants: {
			outline: {
				field: {
					border: "5px solid",
					borderColor: "green",
					focusBorderColor: "gray.500",
					_focusVisible: {
						borderColor: "#F16821",
					},
					_hover: {
						borderColor: "black",
					},
				},
			},
		},
	},
};
const theme = extendTheme({ components });
/* ---------------------------------------- */

/* ----------------------------------------------------- */
export const Login = () => {
	const [primeroLogin, setPrimeroLogin] = useState(true);

	const [estaLogin, setEstaLogin] = useState(false);
	const [usuarioNombre, setUsuarioNombre] = useState("");

	if (estaLogin) {
		/* ----------- */
		return <App usuarioNombre={usuarioNombre} />;
	} else {
		/* ----------- */
		return (
			<>
				{/* CHAKRA se usa para los FORM de "Login" y "Cuenta Nueva" */}
				<ChakraProvider theme={theme}>
					{primeroLogin ? (
						<LoginForm
							setEstaLogin={setEstaLogin}
							setUsuarioNombre={setUsuarioNombre}
							setPrimeroLogin={setPrimeroLogin}
						/>
					) : (
						<CuentaNueva setPrimeroLogin={setPrimeroLogin} />
					)}
				</ChakraProvider>
			</>
		);
	}
};
