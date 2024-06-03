/* ============================== */
// Este formulario está hecho con
//      -  React
//      -  Chakra
//      -  React Hook Fomr
/* ============================== */

import { useState } from "react";

import {
	Button,
	Center,
	Flex,
	Input,
	/* 	InputRightElement, */
	Image,
} from "@chakra-ui/react";

import {
	FormControl,
	/* FormLabel, */
	FormErrorMessage,
	FormHelperText,
} from "@chakra-ui/react";

/* ----------------------------------------------------- */
export const CuentaNueva = ({ setPrimeroLogin }) => {
	const [inputUsuario, setInputUsuario] = useState();

	const handleLoginForm = () => {
		setPrimeroLogin(true);
	};

	const handleInputUsuario = (e) => setInputUsuario(e.target.value);
	const errorUsuario = inputUsuario === "";

	/* -------------- */
	return (
		<>
			<Center w="500px">
				<Flex
					direction="column"
					alignItems="center"
					boxShadow="dark-lg"
					p="6"
					m="25px"
					rounded="md"
					bg="#4FD1C5"
					w="100%"
					color="#09384a"
					borderRadius="lg"
				>
					<Image
						mb="10"
						src="../../src/assets/imagenes/instg.png"
						alt="Logo Instagram"
					/>

					<p>Regístrate para ver fotos y vídeos de tus amigos.</p>

					<form action="">
						<FormControl isInvalid={errorUsuario}>
							{/* <FormLabel>Usuario</FormLabel> */}
							<Input
								variant="outline"
								placeholder="Usuario"
								bg="#d7f3f1"
								type="text"
								value={inputUsuario}
								onChange={handleInputUsuario}
							/>
							{!errorUsuario ? (
								<FormHelperText>Nombre de Usuario.</FormHelperText>
							) : (
								<FormErrorMessage>
									Nombre de Usuario obligatorio.
								</FormErrorMessage>
							)}
						</FormControl>
					</form>
					<Button
						/* onClick={handleLogin}
						isLoading={spinner} */
						/* loadingText="Enviando" */
						colorScheme="teal"
						w="280px"
						h="30px"
						mt="5"
					>
						Registrarte
					</Button>
				</Flex>
			</Center>

			<Center w="500px">
				<Flex
					direction="column"
					alignItems="center"
					boxShadow="dark-lg"
					p="6"
					m="25px"
					rounded="md"
					bg="#4FD1C5"
					w="100%"
					borderRadius="lg"
				>
					<p>¿Tenés una cuenta?</p>
					<Button
						onClick={handleLoginForm}
						bg="#4FD1C5"
						_hover={{ bg: "#4FD1C5", color: "white" }}
					>
						Entrar
					</Button>
				</Flex>
			</Center>
		</>
	);
};
