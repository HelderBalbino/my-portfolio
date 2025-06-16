import ArrowDown from '@/assets/icons/arrow-down.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import StarIcon from '@/assets/icons/star.svg';
import grainImage from '@/assets/images/grain.jpg';
import memojiImage from '@/assets/images/memoji-computer.png';
import saturnIcon from '@/assets/images/saturn.png';
import { HeroOrbit } from '@/components/HeroOrbit';
import Image from 'next/image';

export const HeroSection = () => {
	return (
		<div
			id='home'
			className='relative z-0 overflow-x-clip py-32 md:py-48 lg:py-60'
		>
			{/* adding a mask gradient  */}
			<div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
				<div
					className='absolute inset-0 -z-30 opacity-5'
					style={{ backgroundImage: `url(${grainImage.src})` }}
				></div>
				{/* rings */}
				<div className='hero-ring size-[620px]'></div>
				<div className='hero-ring size-[820px]'></div>
				<div className='hero-ring size-[1020px]'></div>
				<div className='hero-ring size-[1220px]'></div>
				{/* stars icons from heroOrbit */}
				<HeroOrbit
					size={430}
					rotation={-14}
					shouldOrbit
					orbitDuration='30s'
					shouldSpin
					spinDuration='15s'
				>
					<SparkleIcon className='size-8 text-emerald-300/20' />
				</HeroOrbit>
				<HeroOrbit
					size={440}
					rotation={79}
					shouldOrbit
					orbitDuration='32s'
					shouldSpin
					spinDuration='15s'
				>
					<SparkleIcon className='size-5 text-emerald-300/20' />
				</HeroOrbit>
				<HeroOrbit
					size={520}
					rotation={-41}
					shouldOrbit
					orbitDuration='34s'
				>
					<div className='size-2 rounded-full bg-emerald-300/20' />
				</HeroOrbit>
				<HeroOrbit
					size={530}
					rotation={178}
					shouldOrbit
					orbitDuration='36s'
					shouldSpin
					spinDuration='15s'
				>
					<SparkleIcon className='size-10 animate-ping-star text-emerald-300/20' />
				</HeroOrbit>
				<HeroOrbit
					size={550}
					rotation={20}
					shouldOrbit
					orbitDuration='38s'
					shouldSpin
					spinDuration='15s'
				>
					<StarIcon className='size-12 animate-ping-star text-emerald-300' />
				</HeroOrbit>
				<HeroOrbit
					size={590}
					rotation={98}
					shouldOrbit
					orbitDuration='40s'
					shouldSpin
					spinDuration='15s'
				>
					<StarIcon className='size-8 animate-ping-star text-emerald-300' />
				</HeroOrbit>
				<HeroOrbit
					size={650}
					rotation={-5}
					shouldOrbit
					orbitDuration='42s'
				>
					<div className='size-2 animate-ping-star rounded-full bg-emerald-300/20' />
				</HeroOrbit>
				<HeroOrbit
					size={710}
					rotation={144}
					shouldOrbit
					orbitDuration='44s'
					shouldSpin
					spinDuration='15s'
				>
					<SparkleIcon className='size-14 animate-ping-star text-emerald-300/20' />
				</HeroOrbit>
				<HeroOrbit
					size={720}
					rotation={85}
					shouldOrbit
					orbitDuration='46s'
				>
					<div className='size-3 animate-ping-star rounded-full bg-emerald-300/20' />
				</HeroOrbit>
				<HeroOrbit
					size={500}
					rotation={45}
					shouldOrbit
					orbitDuration='46s'
				>
					<div className='size-3 animate-ping-star rounded-full bg-emerald-300/20' />
				</HeroOrbit>
				<HeroOrbit
					size={700}
					rotation={-52}
					shouldOrbit
					orbitDuration='48s'
					shouldSpin
					spinDuration='15s'
				>
					<StarIcon className='size-20 animate-ping-star text-emerald-300' />
				</HeroOrbit>
				<HeroOrbit
					size={800}
					rotation={-200}
					shouldOrbit
					orbitDuration='48s'
					shouldSpin
					spinDuration='15s'
				>
					<StarIcon className='size-20 animate-ping-star text-emerald-300' />
				</HeroOrbit>
				<HeroOrbit
					size={900}
					rotation={120}
					shouldOrbit
					orbitDuration='280s'
				>
					<Image src={saturnIcon} className='size-16' alt='Saturn' />
				</HeroOrbit>
			</div>

			<div className='container'>
				<div className='flex flex-col items-center'>
					<Image
						src={memojiImage}
						className='size-[120px]'
						alt='Memoji'
					/>
					<div className='inline-flex items-center gap-4 rounded-lg border-2 border-gray-800 bg-gray-950 px-4 py-1.5'>
						<div className='relative size-2.5 rounded-full bg-green-500'>
							<div className='absolute inset-0 animate-ping-large rounded-full bg-green-500'></div>
						</div>
						<div className='text-sm font-medium'>
							Available for new projects
						</div>
					</div>
				</div>
				<div className='mx-auto max-w-lg'>
					<h1 className='mt-8 text-center font-serif text-3xl tracking-wide md:text-5xl'>
						Building exceptional user experiences
					</h1>
					<p className='mt-4 text-center text-white/60 md:text-lg'>
						I specialize in transforming designs into functional,
						high performing websites and web applications. Let's
						discuss your project and see how I can help.
					</p>
				</div>
				<div className='mt-8 flex flex-col items-center justify-center gap-4 md:flex-row'>
					<a href='#projects' className='z-10'>
						<button className='inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6 hover:bg-white hover:text-gray-900'>
							<span className='font-semibold'>
								Explore my work
							</span>
							<ArrowDown className='size-4' />
						</button>
					</a>

					<a
						href=''
						target='_blank'
						rel='noopener noreferrer'
						className='z-0'
					>
						<button className='inline-flex h-12 items-center gap-2 rounded-xl border border-white bg-white px-6 text-gray-900'>
							<span>👋🏽</span>
							<span className='font-semibold'>
								Let's connect'
							</span>
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};
