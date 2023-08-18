/* eslint-disable react/prop-types */

import Put from './DB/Put'
import cerrarBtn from '../assets/cerrar.svg'
import Get from './DB/Get'
const Modal = ({ setModal, nuevoUsuario }) => {
	const ocultarModal = () => {
		setModal(false)
	}

	return (
		<div className='modal'>
			<div className='cerrar-modal cursor-pointer'>
				<img src={cerrarBtn} alt='cerrar-modal' onClick={ocultarModal} />
			</div>
			{nuevoUsuario ? <Put /> : <Get />}
		</div>
	)
}

export default Modal
