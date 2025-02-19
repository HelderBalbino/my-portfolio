import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';

export const HeroSection = () => {
	return (
		<div className='py-20'>
			<div className='container'>
				<div className='flex flex-col items-center'>
					<Image
						src={memojiImage}
						className='size-[100px]'
						alt='Memoji'
					/>
					<div className='bg-gray-950 border-2 border-gray-800 px-4 py-1.5 inline-flex'>
						<div></div>
						<div>Available for new projects</div>
					</div>
				</div>
				<h1>Building exceptional user experiences</h1>
				<p>
					I specialize in transforming designs into functional, high
					performing websites and web applications. Let's discuss your
					project and see how I can help.
				</p>
				<div>
					<button>
						<span className='flex flex-col items-center'>
							Explore my work
						</span>
						<ArrowDown />
					</button>
					<button>
						<span className='flex flex-col items-center'>👋🏽</span>
						<span>Let's connect'</span>
					</button>
				</div>
			</div>
		</div>
	);
};
