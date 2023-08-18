import Video from './Video'
import imagen1 from '../assets/imagen1.webp'
import imagen2 from '../assets/imagen2.jpg'
import imagen3 from '../assets/imagen3.webp'

const Section2 = () => {
	return (
		<section className='pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-slate-500'>
			<div className='container'>
				<div className='flex flex-wrap -mx-4 md:mx-16'>
					<div className='w-full md:w-1/2 xl:w-1/3 px-4'>
						<div className='bg-white rounded-lg overflow-hidden mb-10'>
							<img src={imagen1} alt='image' className='mt-12' />
							<div className='p-8 sm:p-9 md:p-7 xl:p-9 text-center'>
								<h3>
									<a
										href='javascript:void(0)'
										className='
                         font-semibold
                         text-dark text-xl
                         sm:text-[22px]
                         md:text-xl
                         lg:text-[22px]
                         xl:text-xl
                         2xl:text-[22px]
                         mb-4
                         block
                         hover:text-primary
                         '>
										Creative Card Component designs graphic elements
									</a>
								</h3>
								<p className='text-base text-body-color leading-relaxed mb-7'>
									Lorem ipsum dolor sit amet pretium consectetur adipiscing
									elit. Lorem consectetur adipiscing elit .{' '}
								</p>
								<a
									href='javascript:void(0)'
									className='
                      inline-block
                      py-2
                      px-7
                      border border-[#E5E7EB]
                      rounded-full
                      text-base text-body-color
                      font-medium
                      hover:border-primary hover:bg-primary hover:text-orange-400
                      transition
                      '>
									View Details
								</a>
							</div>
						</div>
					</div>
					<div className='w-full md:w-1/2 xl:w-1/3 px-4'>
						<div className='bg-white rounded-lg overflow-hidden mb-10'>
							<img src={imagen2} alt='image' className='w-full' />
							<div className='p-8 sm:p-9 md:p-7 xl:p-9 text-center'>
								<h3>
									<a
										href='javascript:void(0)'
										className='
                         font-semibold
                         text-dark text-xl
                         sm:text-[22px]
                         md:text-xl
                         lg:text-[22px]
                         xl:text-xl
                         2xl:text-[22px]
                         mb-4
                         block
                         hover:text-primary
                         '>
										Creative Card Component designs graphic elements
									</a>
								</h3>
								<p className='text-base text-body-color leading-relaxed mb-7'>
									Lorem ipsum dolor sit amet pretium consectetur adipiscing
									elit. Lorem consectetur adipiscing elit.
								</p>

								<a
									href='javascript:void(0)'
									className='
                      inline-block
                      py-2
                      px-7
                      border border-[#E5E7EB]
                      rounded-full
                      text-base text-body-color
                      font-medium
                      hover:border-primary hover:bg-primary hover:text-orange-400
                      transition
                      '>
									View Details
								</a>
							</div>
						</div>
					</div>
					<div className='w-full md:w-1/2 xl:w-1/3 px-4'>
						<div className='bg-white rounded-lg overflow-hidden mb-10'>
							<img src={imagen3} alt='image' className=' w-min' />
							<div className='p-8 sm:p-9 md:p-7 xl:p-9 text-center'>
								<h3>
									<a
										href='javascript:void(0)'
										className='
                         font-semibold
                         text-dark text-xl
                         sm:text-[22px]
                         md:text-xl
                         lg:text-[22px]
                         xl:text-xl
                         2xl:text-[22px]
                         mb-4
                         block
                         hover:text-primary
                         '>
										Creative Card Component designs graphic elements
									</a>
								</h3>
								<p className='text-base text-body-color leading-relaxed mb-7'>
									Lorem ipsum dolor sit amet pretium consectetur adipiscing
									elit. Lorem consectetur adipiscing elit.
								</p>
								<a
									href='javascript:void(0)'
									className='
                      inline-block
                      py-2
                      px-7
                      border border-[#E5E7EB]
                      rounded-full
                      text-base text-body-color
                      font-medium
                      hover:border-primary hover:bg-primary hover:text-orange-400
                      transition
                      '>
									View Details
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<Video />
			</div>
		</section>
	)
}

export default Section2
