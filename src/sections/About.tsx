import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/card';
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.png';
import Image from 'next/image';
import JavascriptIcon from '@/assets/icons/square-js.svg';

const toolboxItems = [
	{ title: 'JavaScript', icon: <JavascriptIcon /> },
	{ title: 'HTML5', icon: '' },
	{ title: 'CSS3', icon: '' },
	{ title: 'React', icon: '' },
	{ title: 'Chrome', icon: '' },
	{ title: 'GitHub', icon: '' },
];

export const AboutSection = () => {
	return (
		<div className='pb-96'>
			<SectionHeader
				eyebrow='About Me'
				title='A Glimpse Into My World'
				description='Learn more about who I am, What I do, and what Inspires me.'
			/>
			<div>
				<Card>
					<div>
						<StarIcon />
						<h3>My Reads</h3>
						<p>Explore the books shaping my perspectives</p>
					</div>
					<Image src={bookImage} alt='Book Cover' />
				</Card>
				<Card>
					<div>
						<StarIcon />
						<h3>My Toolbox</h3>
						<p>
							Explore the technologies and tools I use to craft
							exceptional digital experiences
						</p>
					</div>
				</Card>
			</div>
		</div>
	);
};
