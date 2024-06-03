/* ============================== */
// Este formulario está hecho con
//      -  React
//      -  Chakra
//      -  React Hook Fomr
/* ============================== */

import logoInstagram from "./../../assets/imagenes/instg.png";

import { useState } from "react";
import {
	Box,
	Button,
	Center,
	Checkbox,
	Flex,
	Input,
	InputGroup,
	InputRightElement,
	Image,
	Select,
} from "@chakra-ui/react";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
} from "@chakra-ui/react";

import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";

/* --------- React Hook Form */
import { useForm } from "react-hook-form";

/* ----------------------------------------------------- */
export const CuentaNueva = ({
	setEstaLogin,
	setUsuarioNombre,
	setPrimeroLogin,
}) => {
	const [spinner, setSpinner] = useState(false);
	const [show, setShow] = useState(false);
	const [show2, setShow2] = useState(false);
	const {
		handleSubmit,
		register,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {
			checkbox: false,
		},
	});

	const handleLoginForm = () => {
		setPrimeroLogin(true);
	};
	const handleClick = () => setShow(!show);
	const handleClick2 = () => setShow2(!show2);

	function onSubmit(values) {
		setSpinner(true);
		setTimeout(() => {
			setSpinner(false);
			alert(JSON.stringify(values, null, 2));

			setEstaLogin(true);
			setUsuarioNombre(watch("nombreUsuario"));
		}, 2000);

		return true;
	}

	const handleValidateFechaNacim = () => {
		const fechaNacMiliseg = new Date(watch("fechaNacim")).getTime();
		const fechaMiliseg = new Date().getTime();

		const miliseg = fechaMiliseg - fechaNacMiliseg;

		if (miliseg >= 31536000000 * 18 + 86400000 * 5) {
			return true;
		} else {
			return "Debe ser mayor de 18 años";
		}
	};

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
					<Image mb="5" src={logoInstagram} alt="Logo Instagram" />

					<p>Regístrate para ver fotos y vídeos de tus amigos.</p>

					<form onSubmit={handleSubmit(onSubmit)}>
						<FormControl isInvalid={errors.numeroCelular} width="100%">
							<FormLabel htmlFor="numeroCelular" mt="15px">
								Número de celular
							</FormLabel>
							<Input
								width="400px"
								id="numeroCelular"
								variant="outline"
								placeholder="Número de celular"
								aria-label="Ingrese número de móvil"
								bg="#d7f3f1"
								type="number"
								{...register("numeroCelular", {
									required: "Este dato es requerido",
									minLength: {
										value: 10,
										message: "Mínimo/máximo 10 dígitos",
									},
									pattern: {
										value: /\d+/,
										message: "Únicamnete números.",
									},
								})}
							/>

							{!errors.numeroCelular ? (
								<FormHelperText>
									Ingresar número de celular, 10 dígitos sin espacios ni
									guiones.
								</FormHelperText>
							) : (
								<FormErrorMessage>
									{errors.numeroCelular.message}
								</FormErrorMessage>
							)}
						</FormControl>

						<FormControl isInvalid={errors.correo}>
							<FormLabel htmlFor="correo" mt="15px">
								Correo electrónico
							</FormLabel>
							<Input
								id="correo"
								variant="outline"
								placeholder="Correo electrónico"
								aria-label="Ingrese correo"
								bg="#d7f3f1"
								type="email"
								{...register("correo", {
									required: "Este dato es requerido",
									minLength: {
										value: 3,
										message: "Mínimo 3 caracteres",
									},
								})}
							/>
							{!errors.correo ? (
								<FormHelperText>
									Ingresar dirección de correo electrónico.
								</FormHelperText>
							) : (
								<FormErrorMessage>{errors.correo.message}</FormErrorMessage>
							)}
						</FormControl>

						<FormControl isInvalid={errors.nombreUsuario}>
							<FormLabel htmlFor="nombreUsuario" mt="15px">
								Nombre de Usuario
							</FormLabel>
							<Input
								id="nombreUsuario"
								variant="outline"
								placeholder="Nombre de Usuario"
								aria-label="Ingrese nombre de usuario"
								bg="#d7f3f1"
								type="text"
								{...register("nombreUsuario", {
									required: "Este dato es requerido",
									minLength: {
										value: 6,
										message: "Mínimo 6 caracteres",
									},
									pattern: {
										value: /^[A-Za-z]+$/i,
										message: "Solo caracteres alfabéticos",
									},
								})}
							/>
							{!errors.nombreUsuario ? (
								<FormHelperText>
									Ingresar nombre de usuario. Mínimo 6 caracteres.
								</FormHelperText>
							) : (
								<FormErrorMessage>
									{errors.nombreUsuario.message}
								</FormErrorMessage>
							)}
						</FormControl>

						<FormControl isInvalid={errors.contrasenia}>
							<FormLabel htmlFor="contrasenia" mt="15px">
								Contraseña
							</FormLabel>
							<InputGroup>
								<Input
									id="contrasenia"
									variant="outline"
									placeholder="Contraseña"
									aria-label="Ingrese contraseña"
									pr="4.5rem"
									bg="#d7f3f1"
									autoComplete="off"
									type={show ? "text" : "password"}
									{...register("contrasenia", {
										required: "Este dato es requerido",
										minLength: {
											value: 8,
											message: "Mínimo 8 caracteres",
										},
									})}
								/>
								<InputRightElement width="4.6rem">
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

							{!errors.contrasenia ? (
								<FormHelperText>
									Ingresar contraseña. Mínimo 8 caracteres.
								</FormHelperText>
							) : (
								<FormErrorMessage>
									{errors.contrasenia.message}
								</FormErrorMessage>
							)}
						</FormControl>

						<FormControl isInvalid={errors.confirmarContrasenia}>
							<FormLabel htmlFor="confirmarContrasenia" mt="15px">
								Confirmar Contraseña
							</FormLabel>
							<InputGroup size="md">
								<Input
									id="confirmarContrasenia"
									variant="outline"
									placeholder="Contraseña"
									aria-label="Confirmar contraseña"
									pr="4.5rem"
									bg="#d7f3f1"
									autoComplete="off"
									type={show2 ? "text" : "password"}
									{...register("confirmarContrasenia", {
										required: "Este dato es requerido",
										validate: (value) => {
											if (value === watch("contrasenia")) return true;
											else return "Las contraseñas no coinciden";
										},
									})}
								/>
								<InputRightElement width="4.5rem">
									<Button
										h="1.75rem"
										size="sm"
										onClick={handleClick2}
										fontSize="xl"
									>
										{show2 ? <FaEyeSlash /> : <IoEyeSharp />}
									</Button>
								</InputRightElement>
							</InputGroup>

							{!errors.confirmarContrasenia ? (
								<FormHelperText>Confirmar contraseña.</FormHelperText>
							) : (
								<FormErrorMessage>
									{errors.confirmarContrasenia.message}
								</FormErrorMessage>
							)}
						</FormControl>

						<FormControl isInvalid={errors.fechaNacim}>
							<FormLabel htmlFor="fechaNacim" mt="15px">
								Fecha de nacimiento
							</FormLabel>
							<Input
								id="fechaNacim"
								variant="outline"
								placeholder="Fecha de nacimiento"
								aria-label="Ingrese fecha de nacimiento"
								bg="#d7f3f1"
								type="date"
								{...register("fechaNacim", {
									required: "Este dato es requerido",
									validate: { handleValidateFechaNacim },
								})}
							/>
							{!errors.fechaNacim ? (
								<FormHelperText>
									Ingresar fecha de nacimiento. Mayor de edad.
								</FormHelperText>
							) : (
								<FormErrorMessage>{errors.fechaNacim.message}</FormErrorMessage>
							)}
						</FormControl>

						<FormControl isInvalid={errors.nacionalidad}>
							<FormLabel htmlFor="nacionalidad" mt="15px">
								Nacionalidad
							</FormLabel>
							<Select
								id="nacionalidad"
								variant="outline"
								placeholder="Nacionalidad"
								aria-label="Seleccionar nacionalidad"
								{...register("nacionalidad", {
									required: "Este dato es requerido",
								})}
							>
								<option value="arg">Argentina</option>
								<option value="chi">Chile</option>
								<option value="bra">Brasil</option>
							</Select>

							{!errors.nacionalidad ? (
								<FormHelperText>Seleccionar nacionalidad.</FormHelperText>
							) : (
								<FormErrorMessage>
									{errors.nacionalidad.message}
								</FormErrorMessage>
							)}
						</FormControl>

						<FormControl isInvalid={errors.fotoPerfil}>
							<FormLabel htmlFor="fotoPerfil" mt="15px">
								Foto de perfil
							</FormLabel>
							<Input
								id="fotoPerfil"
								variant="outline"
								placeholder="Foto de perfil"
								aria-label="Seleccionar URL de la foto perfil"
								bg="#d7f3f1"
								type="url"
								{...register("fotoPerfil", {
									required: "Url es requerido",
								})}
							/>
							{!errors.fotoPerfild ? (
								<FormHelperText>
									Ingresar URL de la foto de perfil.
								</FormHelperText>
							) : (
								<FormErrorMessage>{errors.fotoPerfil.message}</FormErrorMessage>
							)}
						</FormControl>

						<FormControl isInvalid={errors.terminos}>
							<FormLabel htmlFor="terminos" mt="15px">
								Aceptar los términos y condiciones
							</FormLabel>
							<Checkbox
								id="terminos"
								aria-label="Seleccionar esta opción"
								{...register("terminos", {
									required: "Este dato es requerido",
								})}
							>
								Acepto
							</Checkbox>
							<FormErrorMessage>
								{errors.terminos && errors.terminos.message}
							</FormErrorMessage>
						</FormControl>

						<Box as="div" display="flex" justifyContent="center">
							<Button
								type="submit"
								isLoading={spinner}
								/* loadingText="Enviando" */
								colorScheme="teal"
								w="300px"
								h="30px"
								mt="5"
							>
								Registrarte
							</Button>
						</Box>
					</form>
				</Flex>
			</Center>

			{/* -------------------------------------- */}
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
