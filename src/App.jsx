import { useState } from 'react'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Modal from './components/Modal'

const App = () => {
	const [modal, setModal] = useState(false)
	const [nuevoUsuario, setNuevoUsuario] = useState(false)

	return (
		<>
			<NavBar setModal={setModal} setNuevoUsuario={setNuevoUsuario} />

			<Section1 />
			<Section2 />
			<Section3 />
			<Footer />
			{modal && <Modal setModal={setModal} nuevoUsuario={nuevoUsuario} />}
		</>
	)
}

export default App
