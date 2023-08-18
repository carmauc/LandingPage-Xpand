import logo from '../assets/logo1.jpeg'
import logo2 from '../assets/logo2.png'

const Section3 = () => {
	return (
		<section
			id='section3'
			className='relative bg-slate-500 md:min-h-screen h-auto w-auto flex-wrap justify-center md:grid md:grid-cols-2 grid-cols-1 grid pt-16'>
			<div className='flex flex-col justify-center items-center  md:m-10 '>
				<h2 className='flex justify-center items-center text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-orange-400 brightness-150  hover:animate-rubber mb-11'>
					Encuentranos
				</h2>
				<a
					href='https://linktr.ee/proyectowerunnike'
					target='_blank'
					className=' relative w-20'
					title=''
					rel='noreferrer'>
					<img src={logo} className=' rounded-md' />
				</a>
			</div>

			<div className='flex flex-col justify-center items-center  md:m-10 mt-16 mb-11 '>
				<h2 className='flex justify-center items-center text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-orange-400 brightness-150  hover:animate-rubber mb-11'>
					Contáctanos{' '}
				</h2>
				<a
					href='https://linktr.https://linktr.ee/proyectowerun'
					target='_blank'
					className=' relative w-20'
					title=''
					rel='noreferrer'>
					<img src={logo2} className=' rounded-md' />
				</a>
			</div>
		</section>
	)
}

export default Section3
