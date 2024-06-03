/* ============================== */
// Este formulario está hecho con
//      -  React
//      -  Chakra
//      -  Input Controlado
/* ============================== */

import { ErrorLoginModal } from "./ErrorLoginModal.jsx";

import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

import { useState } from "react";

import { useDisclosure } from "@chakra-ui/react";
import {
	Button,
	Center,
	Flex,
	Input,
	InputGroup,
	InputRightElement,
	Image,
	useToast,
} from "@chakra-ui/react";
import {
	FormControl,
	/* FormLabel, */
	FormErrorMessage,
	FormHelperText,
} from "@chakra-ui/react";

/* ----------------------------------------------------- */
export const LoginForm = ({
	setEstaLogin,
	setUsuarioNombre,
	setPrimeroLogin,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const [errorLogin, setErrorLogin] = useState(false);
	const [show, setShow] = useState(false);
	const [spinner, setSpinner] = useState(false);

	/* INICIALIZO sin nada, para que funcione el tema d elos colores del input, sino empiez en rojo */
	const [inputUsuario, setInputUsuario] = useState();
	const [inputContrasenia, setInputContrasenia] = useState();

	const handleClick = () => setShow(!show);

	const handleInputUsuario = (e) => setInputUsuario(e.target.value);
	const errorUsuario = inputUsuario === "";
	const handleInputContrasenia = (e) => setInputContrasenia(e.target.value);
	const errorContraseña = inputContrasenia === "";
	const toast = useToast();

	const handleLogin = () => {
		if (
			inputUsuario === "" ||
			inputContrasenia === "" ||
			inputUsuario === undefined ||
			inputContrasenia === undefined
		) {
			toast({
				title: "Error de Login.",
				description: "Usuario o Contraseña Vacío.",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		} else {
			setSpinner(true);
			setTimeout(() => {
				if ((inputUsuario === "MAGUI") & (inputContrasenia === "123456")) {
					setEstaLogin(true);
					setUsuarioNombre(inputUsuario);
				} else {
					onOpen(true);
					setErrorLogin(true);
					setInputUsuario("");
					setInputContrasenia("");
					setSpinner(false);
				}
			}, 2000);
		}
	};

	const handleCuentaNueva = () => {
		setPrimeroLogin(false);
	};

	/* ----------------- */
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

					<form action="">
						<FormControl isInvalid={errorUsuario}>
							{/* <FormLabel>Usuario</FormLabel> */}
							<Input
								variant="outline"
								placeholder="Usuario"
								bg="#d7f3f1"
								type="text"
								/* Esta linea y la siguiente Input controlado */
								// value={inputUsuario}
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

						<FormControl isInvalid={errorContraseña} mt="5">
							{/* <FormLabel>Contraseña</FormLabel> */}
							<InputGroup size="md">
								<Input
									variant="outline"
									placeholder="Contraseña"
									type={show ? "text" : "password"}
									pr="4.5rem"
									bg="#d7f3f1"
									autoComplete="off"
									/* Esta linea y la siguiente Input controlado */
									// value={inputContrasenia}
									onChange={handleInputContrasenia}
								/>
								<InputRightElement width="4.5rem">
									<Button
										h="1.75rem"
										size="sm"
										onClick={handleClick}
										fontSize="xl"
									>
										{show ? <FaEyeSlash /> : <IoEyeSharp />}
									</Button>
								</InputRightElement>
							</InputGroup>
							{!errorContraseña ? (
								<FormHelperText>Contraseña</FormHelperText>
							) : (
								<FormErrorMessage>Contraseña obligatoria.</FormErrorMessage>
							)}
						</FormControl>
					</form>

					<Button
						onClick={handleLogin}
						isLoading={spinner}
						/* loadingText="Enviando" */
						colorScheme="teal"
						w="280px"
						h="30px"
						mt="5"
					>
						Entrar
					</Button>
				</Flex>
			</Center>

			{errorLogin ? <ErrorLoginModal isOpen={isOpen} onClose={onClose} /> : ""}
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
					<Button
						onClick={handleCuentaNueva}
						bg="#4FD1C5"
						_hover={{ bg: "#4FD1C5", color: "white" }}
					>
						Crear cuenta nueva
					</Button>
				</Flex>
			</Center>
		</>
	);
};
