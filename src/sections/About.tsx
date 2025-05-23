import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/card';
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.png';
import Image from 'next/image';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import { TechIcon } from '@/components/TechIcon';
import mapImage from '@/assets/images/map.png';
import memojiImage from '@/assets/images/memoji-computer.png';

const toolboxItems = [
	{ title: 'JavaScript', iconType: JavascriptIcon },
	{ title: 'HTML5', iconType: HTMLIcon },
	{ title: 'CSS3', iconType: CssIcon },
	{ title: 'React', iconType: ReactIcon },
	{ title: 'Chrome', iconType: ChromeIcon },
	{ title: 'GitHub', iconType: GithubIcon },
];

const hobbies = [
	{ title: 'Reading', emoji: '📚' },
	{ title: 'Hiking', emoji: '🥾' },
	{ title: 'Swimming', emoji: '🏊🏼‍♂️' },
	{ title: 'Photography', emoji: '📷' },
	{ title: 'Music', emoji: '🎵' },
	{ title: 'Movies', emoji: '🍿' },
	{ title: 'Traveling', emoji: '✈️' },
	{ title: 'Cooking', emoji: '🍳' },
	{ title: 'Gaming', emoji: '🎮' },
	{ title: 'Writing', emoji: '✍️' },
	{ title: 'Art', emoji: '🎨' },
	{ title: 'Fitness', emoji: '🏋️‍♂️' },
	{ title: 'Volunteering', emoji: '🤝' },
];

export const AboutSection = () => {
	return (
		<div className='py-20'>
			<div className='container'>
				<SectionHeader
					eyebrow='About Me'
					title='A Glimpse Into My World'
					description='Learn more about who I am, What I do, and what Inspires me.'
				/>
				<div className='mt-20'>
					<Card>
						<div>
							<div className='inline-flex items-center gap-2'>
								<StarIcon className='size-9 text-emerald-300' />
								<h3 className='font-serif text-3xl'>
									My Reads
								</h3>
							</div>
							<p className='text-sm text-white/60'>
								Explore the books shaping my perspectives
							</p>
						</div>
						<Image src={bookImage} alt='Book Cover' />
					</Card>
					<Card>
						<div>
							<StarIcon />
							<h3>My Toolbox</h3>
							<p>
								Explore the technologies and tools I use to
								craft exceptional digital experiences
							</p>
						</div>
						<div>
							{toolboxItems.map((item) => (
								<div key={item.title}>
									<TechIcon component={item.iconType} />
									<span>{item.title}</span>
								</div>
							))}
						</div>
					</Card>
					<Card>
						<div>
							<StarIcon />
							<h3>Beyond the Code</h3>
							<p>
								Discover my passions outside of the digital
								realm and what fuels my creativity.
							</p>
						</div>
						<div>
							{hobbies.map((hobby) => (
								<div key={hobby.title}>
									<span>{hobby.title}</span>
									<span>{hobby.emoji}</span>
								</div>
							))}
						</div>
					</Card>
					<Card>
						<Image src={mapImage} alt='map Image' />
						<Image src={memojiImage} alt='Memoji on a map' />
					</Card>
				</div>
			</div>
		</div>
	);
};
