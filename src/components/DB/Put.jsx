// import {useNavigate } from "react-router-dom"
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { useState } from 'react'
import Swal from 'sweetalert2'

const Put = () => {
	const [nombre, setNombre] = useState('')
	const [email, setEmail] = useState('')
	// const navigate = useNavigate()

	const clientes = collection(db, 'clientes')

	const store = async e => {
		e.preventDefault()
		await addDoc(clientes, { nombre: nombre, email: email })
		// navigate('/')
	}

	//SweetAlert
	const agregarUsuario = () => {
		Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Your work has been saved',
			showConfirmButton: false,
			timer: 1500,
		})
	}

	return (
		<div className=' mx-5 grid grid-cols-1 justify-items-center'>
			<h2 className='font-bold text-3xl text-center mt-10'>Nuevo Usuario</h2>
			<form
				onSubmit={store}
				className='bg-white shadow-md rounded-lg py-10 px-5 mt-10'>
				<div className='mb-5'>
					<label
						htmlFor='propietario'
						className='block font-medium text-gray-700 uppercase'>
						Nombre
					</label>
					<input
						id='propietario'
						type='text'
						placeholder='Nombre'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						value={nombre}
						onChange={e => setNombre(e.target.value)}
					/>
				</div>

				<div className='mb-5'>
					<label
						htmlFor='email'
						className='block font-medium text-gray-700 uppercase'>
						Email
					</label>
					<input
						id='email'
						type='email'
						placeholder='Email'
						className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>

				<input
					type='submit'
					className=' bg-orange-600 w-full p-3 text-white uppercase font-bold hover:bg-orange-800 cursor-pointer transition-all'
					//   value={usuario.id ? "Editar Paciente" : "Agregar Paciente"}
					value={'Registrar Usuario'}
					onClick={() => agregarUsuario()}></input>
			</form>
		</div>
	)
}

export default Put
