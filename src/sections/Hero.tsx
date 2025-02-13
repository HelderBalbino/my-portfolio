import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';

export const HeroSection = () => {
	return (
		<div>
			<div className='container'>
				<Image src={memojiImage} alt='Memoji' />
				<div>
					<div></div>
					<div>Available for new projects</div>
				</div>
				<h1>Building exceptional user experiences</h1>
				<p>
					I specialize in transforming designs into functional, high
					performing websites and web applications. Let's discuss your
					project and see how I can help.
				</p>
				<div>
					<button>
						<span>Explore my work</span>
					</button>
				</div>
			</div>
		</div>
	);
};
