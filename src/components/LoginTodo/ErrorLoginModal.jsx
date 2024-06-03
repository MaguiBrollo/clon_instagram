
import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";

export const ErrorLoginModal = ({onClose, isOpen}) => {

	return (
		<>
			<Modal onClose={onClose} isOpen={isOpen} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Error de Ingreso </ModalHeader>
					<ModalCloseButton />
					<ModalBody color="red">
						Usuario o contraseña incorrecto. Vuelve a comprobarlos.
					</ModalBody>
					<ModalFooter>
						<Button onClick={onClose}>Cerrar</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
