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
import { CardHeader } from '@/components/CardHeader';
import { ToolboxItems } from '@/components/ToolboxItems';

const toolboxItems = [
	{ title: 'JavaScript', iconType: JavascriptIcon },
	{ title: 'HTML5', iconType: HTMLIcon },
	{ title: 'CSS3', iconType: CssIcon },
	{ title: 'React', iconType: ReactIcon },
	{ title: 'Chrome', iconType: ChromeIcon },
	{ title: 'GitHub', iconType: GithubIcon },
];

const hobbies = [
	{ title: 'Reading', emoji: '📚', left: '', top: '' },
	{ title: 'Hiking', emoji: '🥾', left: '', top: '' },
	{ title: 'Swimming', emoji: '🏊🏼‍♂️', left: '', top: '' },
	{ title: 'Photography', emoji: '📷', left: '', top: '' },
	{ title: 'Cycling', emoji: '🚴‍♂️', left: '', top: '' },
	{ title: 'Dancing', emoji: '🕺🏽', left: '', top: '' },
	{ title: 'Gardening', emoji: '🌱', left: '', top: '' },
	{ title: 'Podcasts', emoji: '🎙️', left: '', top: '' },
	{ title: 'Music', emoji: '🎵', left: '', top: '' },
	{ title: 'Sports', emoji: '⚽', left: '', top: '' },
	{ title: 'Mixology', emoji: '🍸', left: '', top: '' },
	{ title: 'Technology', emoji: '💻', left: '', top: '' },
	{ title: 'Food', emoji: '🍔', left: '', top: '' },
	{ title: 'Movies', emoji: '🍿', left: '', top: '' },
	{ title: 'Traveling', emoji: '✈️', left: '', top: '' },
	{ title: 'Cooking', emoji: '🍳', left: '', top: '' },
	{ title: 'Gaming', emoji: '🎮', left: '', top: '' },
	{ title: 'Writing', emoji: '✍️', left: '', top: '' },
	{ title: 'Art', emoji: '🎨', left: '', top: '' },
	{ title: 'Fitness', emoji: '🏋️‍♂️', left: '', top: '' },
	{ title: 'Volunteering', emoji: '🤝', left: '', top: '' },
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
				<div className='mt-20 flex flex-col gap-8'>
					<Card className='h-[320px]'>
						<CardHeader
							title='My Reads'
							description='Explore the books shaping my perspectives'
						/>
						<div className='w-40 mx-auto mt-8'>
							<Image src={bookImage} alt='Book Cover' />
						</div>
					</Card>
					<Card className='h-[320px] p-0'>
						<CardHeader
							title='My Toolbox'
							description='Explore the technologies and tools I use to craft exceptional digital experiences'
							className='px-6 pt-6'
						/>
						<ToolboxItems items={toolboxItems} className='mt-6' />
						<ToolboxItems
							items={toolboxItems}
							className='mt-6'
							itemsWrapperClassName='-translate-x-1/2'
						/>
					</Card>
					<Card className='h-[320px]'>
						<CardHeader
							title='My Hobbies'
							description='Discover the activities that fuel my creativity and passion beyond coding'
						/>
						<div className='relative'>
							{hobbies.map((hobby) => (
								<div
									key={hobby.title}
									className='inline-flex  items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute'
								>
									<span className='font-medium text-gray-950'>
										{hobby.title}
									</span>
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
