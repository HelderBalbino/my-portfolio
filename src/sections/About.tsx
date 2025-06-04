import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/card';
import bookImage from '@/assets/images/book-cover.png';
import Image from 'next/image';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
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
	{ title: 'Reading', emoji: '📚', left: '50%', top: '50%' },
	{ title: 'Hiking', emoji: '🥾', left: '43%', top: '12%' },
	{ title: 'Swimming', emoji: '🏊🏼‍♂️', left: '1%', top: '70%' },
	{ title: 'Gaming', emoji: '📷', left: '30%', top: '80%' },
	{ title: 'Cycling', emoji: '🚴‍♂️', left: '25%', top: '45%' },
	{ title: 'Dancing', emoji: '🕺🏽', left: '80%', top: '10%' },
	{ title: 'Gardening', emoji: '🌱', left: '82%', top: '34%' },
	{ title: 'Podcasts', emoji: '🎙️', left: '55%', top: '25%' },
	{ title: 'Music', emoji: '🎵', left: '88%', top: '80%' },
	{ title: 'Sports', emoji: '⚽', left: '70%', top: '60%' },
	{ title: 'Mixology', emoji: '🍸', left: '50%', top: '80%' },
	{ title: 'Photography', emoji: '💻', left: '20%', top: '10%' },
	{ title: 'eating', emoji: '🍔', left: '38%', top: '53%' },
	{ title: 'Movies', emoji: '🍿', left: '2%', top: '50%' },
	{ title: 'Traveling', emoji: '✈️', left: '15%', top: '80%' },
	{ title: 'Cooking', emoji: '🍳', left: '66%', top: '1%' },
	{ title: 'Technology', emoji: '🎮', left: '2%', top: '2%' },
	{ title: 'Writing', emoji: '✍️', left: '13%', top: '50%' },
	{ title: 'Art', emoji: '🎨', left: '1%', top: '30%' },
	{ title: 'Volunteering', emoji: '🤝', left: '70%', top: '80%' },
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
					<div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
						<Card className='h-[320px] p-0 md:col-span-2'>
							<CardHeader
								title='My Reads'
								description='Explore the books shaping my perspectives'
							/>
							<div className='w-40 mx-auto mt-8'>
								<Image src={bookImage} alt='Book Cover' />
							</div>
						</Card>
						<Card className='h-[320px] p-0 md:col-span-3'>
							<CardHeader
								title='My Toolbox'
								description='Explore the technologies and tools I use to craft exceptional digital experiences'
								className='px-6 pt-6'
							/>
							<ToolboxItems
								items={toolboxItems}
								className='mt-6'
							/>
							<ToolboxItems
								items={toolboxItems}
								className='mt-6'
								itemsWrapperClassName='-translate-x-1/2'
							/>
						</Card>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
						<Card className='h-[320px] p-0 flex flex-col md:col-span-3'>
							<CardHeader
								title='My Hobbies'
								description='Discover the activities that fuel my creativity and passion beyond coding'
								className='px-6 py-6'
							/>
							<div className='relative flex-1'>
								{hobbies.map((hobby) => (
									<div
										key={hobby.title}
										className='inline-flex  items-center gap-2 px-3 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1 absolute'
										style={{
											left: hobby.left,
											top: hobby.top,
										}}
									>
										<span className='font-medium text-gray-950'>
											{hobby.title}
										</span>
										<span>{hobby.emoji}</span>
									</div>
								))}
							</div>
						</Card>
						<Card className='h-[320px] p-0 relative md:col-span-2'>
							<Image
								src={mapImage}
								alt='map Image'
								className='h-full w-full object-cover'
							/>
							<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-14 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 flex items-center justify-center after:content-[""] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full '>
								<Image
									src={memojiImage}
									alt='Memoji on a map'
									className='w-10 h-10 object-contain'
								/>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};
