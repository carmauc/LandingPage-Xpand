import { useEffect, useState } from 'react'

const Video = () => {
	const [video, setVideo] = useState([])

	useEffect(() => {
		const consultarAPI = async () => {
			const URL =
				'https://www.googleapis.com/youtube/v3/videos?id=R0w72YEu2Jw&key=AIzaSyATfFz3e0IdrFgWlap-rfLGLDCRJ0RaTrI&part=snippet,contentDetails,statistics,status'
			const respuesta = await fetch(URL)
			const resultado = await respuesta.json()
			console.log(resultado.items)
			const arrayVideo = resultado.items.map(item => {
				// const {title, thumbnails = {}} = snippet;
				const objeto = {
					title: item?.snippet?.title || '',
					medium: item?.snippet?.thumbnails.default.url || '',
					id: item?.id || '',
				}
				setVideo(objeto)
				console.log(arrayVideo)
				return objeto
			})

			console.log(arrayVideo)
		}
		consultarAPI()
	}, [])
	return (
		<div className='grid justify-items-center my-12 grid-cols-1'>
			<iframe
				className=' md:w-[560px] md:h-[315px] w-[320px] h-[240px] '
				src='https://www.youtube.com/embed/R0w72YEu2Jw'
				title='YouTube video player'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowfullscreen></iframe>
			<p className=' text-center text-orange-700 shadow-sm text-3xl'>
				{video.title}
			</p>
		</div>
	) //   return (
	//
	// )
}

export default Video
