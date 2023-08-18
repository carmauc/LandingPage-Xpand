/* eslint-disable react/prop-types */

import { useState } from 'react'
const NavBar = ({ setModal, setNuevoUsuario }) => {
	const [navbar, setNavbar] = useState(false)

	const handleNuevoUsuario = () => {
		setModal(true)
		setNuevoUsuario(true)
	}

	const usuarioExistente = () => {
		setModal(true)
		setNuevoUsuario(false)
	}
	return (
		<nav className='relative px-4 md:px-4 py-4 w-full bg-slate-600 z-50 '>
			<div className='container flex flex-wrap items-center justify-between mx-auto'>
				<a
					onClick={handleNuevoUsuario}
					className='py-1 px-5 relative font-semibold tracking-wide leading-none overflow-hidden hover:text-orange-400 cursor-pointer'
					type='button'
					rel='noreferrer'>
					SUSCRÍBETE
				</a>
				<div className='flex space-x-5 md:order-2 cursor-pointer'>
					<button
						className='relative md:hidden p-2 text-orange-700 rounded-md outline-none animate-pulse'
						onClick={() => setNavbar(!navbar)}>
						{navbar ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className=' w-6 h-6 '
								viewBox='0 0 20 20'
								fill='currentColor'>
								<path
									fillRule='evenodd'
									d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
									clipRule='evenodd'
								/>
							</svg>
						) : (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-6 h-6 '
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M4 6h16M4 12h16M4 18h16'
								/>
							</svg>
						)}
					</button>
				</div>

				<div
					className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
						navbar ? 'block' : 'hidden'
					}`}>
					<ul className='flex flex-col mt-12 md:mt-0 md:flex-row items-center justify-center space-y-8 md:space-x-12 md:space-y-0 animate-fadein'>
						<li className='text-gray-400 hover:text-orange-400 hover-underline-animation cursor-pointer'>
							Nuevo !
						</li>
						<li className='text-gray-400 hover:text-orange-400 hover-underline-animation cursor-pointer'>
							Mujer
						</li>
						<li className='text-gray-400 hover:text-orange-400 hover-underline-animation cursor-pointer'>
							Hombre
						</li>
						<li
							className='text-gray-400 hover:text-orange-400 hover-underline-animation cursor-pointer'
							onClick={usuarioExistente}>
							Usuarios
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
