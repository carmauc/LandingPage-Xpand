import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useState, useEffect } from 'react'

//sweetAlert
const MySwal = withReactContent(Swal)

const Get = () => {
	const [usuario, setUsuario] = useState([])

	const clientes = collection(db, 'clientes')

	const getUsuarios = async () => {
		const respuesta = await getDocs(clientes)
		setUsuario(respuesta.docs.map(doc => ({ ...doc.data(), id: doc.id })))
		// console.log(usuario);
	}
	const deleteUsuarios = async id => {
		const usuarioDoc = doc(db, 'clientes', id)
		await deleteDoc(usuarioDoc)
		getUsuarios()
	}
	useEffect(() => {
		getUsuarios()
	}, [])

	//SweetAlert
	const confirmarDelete = id => {
		MySwal.fire({
			title: 'Eliminar Usuario?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then(result => {
			if (result.isConfirmed) {
				// llamar funcion para eliminar
				deleteUsuarios(id)
				Swal.fire('Eliminado!', 'Your file has been deleted.', 'success')
			}
		})
	}

	return (
		<>
			<div className='container'>
				<div className='row-auto'>
					<div className=' col-auto'>
						<div className='grid'>
							<a>USUARIOS</a>
						</div>

						<table className=' table text-center text-white '>
							<thead>
								<tr>
									<th>Nombre</th>
									<th>Correo</th>
									<th>Acciones</th>
								</tr>
							</thead>
							<tbody className=' text-center'>
								{usuario.map(usuario => (
									<tr key={usuario.id}>
										<td>{usuario.nombre}</td>
										<td>{usuario.email}</td>

										<td>
											<button onClick={() => confirmarDelete(usuario.id)}>
												<i
													className='fa-solid fa-trash'
													size='sm'
													style={{ color: '#f50025' }}></i>
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	)
}

export default Get
