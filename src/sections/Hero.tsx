import ArrowDown from '@/assets/icons/arrow-down.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import StarIcon from '@/assets/icons/star.svg';
import grainImage from '@/assets/images/grain.jpg';
import memojiImage from '@/assets/images/memoji-computer.png';
import { HeroOrbit } from '@/components/HeroOrbit';
import Image from 'next/image';

export const HeroSection = () => {
	return (
		<div className='relative z-0 overflow-x-clip py-32 md:py-48 lg:py-60'>
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
				<HeroOrbit size={800} rotation={-72}>
					<StarIcon className='size-28 text-emerald-300' />
				</HeroOrbit>
				<HeroOrbit size={550} rotation={20}>
					<StarIcon className='size-12 text-emerald-300' />
				</HeroOrbit>
				<HeroOrbit size={590} rotation={98}>
					<StarIcon className='size-8 text-emerald-300' />
				</HeroOrbit>
				{/* sparkle icons */}
				<HeroOrbit size={430} rotation={-14}>
					<SparkleIcon className='size-8 text-emerald-300/20' />
				</HeroOrbit>
				<HeroOrbit size={440} rotation={79}>
					<SparkleIcon className='size-5 text-emerald-300/20' />
				</HeroOrbit>
				<HeroOrbit size={530} rotation={178}>
					<SparkleIcon className='size-10 text-emerald-300/20' />
				</HeroOrbit>
				<HeroOrbit size={710} rotation={144}>
					<SparkleIcon className='size-14 text-emerald-300/20' />
				</HeroOrbit>
				{/* round sparkle icons */}
				<HeroOrbit size={720} rotation={85}>
					<div className='size-3 rounded-full bg-emerald-300/20' />
				</HeroOrbit>
				<HeroOrbit size={520} rotation={-41}>
					<div className='size-2 rounded-full bg-emerald-300/20' />
				</HeroOrbit>
				<HeroOrbit size={650} rotation={-5}>
					<div className='size-2 rounded-full bg-emerald-300/20' />
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
							<div className='animate-ping-large absolute inset-0 rounded-full bg-green-500'></div>
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
					<button className='inline-flex h-12 items-center gap-2 rounded-xl border border-white/15 px-6'>
						<span className='font-semibold'>Explore my work</span>
						<ArrowDown className='size-4' />
					</button>
					<button className='inline-flex h-12 items-center gap-2 rounded-xl border border-white bg-white px-6 text-gray-900'>
						<span>👋🏽</span>
						<span className='font-semibold'>Let's connect'</span>
					</button>
				</div>
			</div>
		</div>
	);
};
