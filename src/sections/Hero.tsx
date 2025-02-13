import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';

export const HeroSection = () => {
	return (
		<div>
			<div className='container'>
				<Image src={memojiImage} alt='Memoji' />
			</div>
			<div>
				<div></div>
				<div>Available for new projects</div>
			</div>
		</div>
	);
};
