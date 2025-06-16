'use client';
import ChromeIcon from '@/assets/icons/chrome.svg';
import CssIcon from '@/assets/icons/css3.svg';
import GithubIcon from '@/assets/icons/github.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import ReactIcon from '@/assets/icons/react.svg';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import bookImage from '@/assets/images/book-cover.png';
import mapImage from '@/assets/images/map.png';
import memojiImage from '@/assets/images/memoji-computer.png';
import { CardHeader } from '@/components/CardHeader';
import { SectionHeader } from '@/components/SectionHeader';
import { ToolboxItems } from '@/components/ToolboxItems';
import { Card } from '@/components/card';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

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
	{ title: 'Cycling', emoji: '🚴‍♂️', left: '25%', top: '45%' },
	{ title: 'Gardening', emoji: '🌱', left: '82%', top: '34%' },
	{ title: 'Podcasts', emoji: '🎙️', left: '55%', top: '25%' },
	{ title: 'Music', emoji: '🎵', left: '88%', top: '80%' },
	{ title: 'Sports', emoji: '⚽', left: '70%', top: '60%' },
	{ title: 'Mixology', emoji: '🍸', left: '50%', top: '80%' },
	{ title: 'Photography', emoji: '📷', left: '20%', top: '10%' },
	{ title: 'eating', emoji: '🍔', left: '38%', top: '53%' },
	{ title: 'Movies', emoji: '🍿', left: '2%', top: '50%' },
	{ title: 'Traveling', emoji: '✈️', left: '15%', top: '80%' },
	{ title: 'Cooking', emoji: '🍳', left: '66%', top: '1%' },
	{ title: 'Technology', emoji: '💻', left: '2%', top: '2%' },
	{ title: 'Writing', emoji: '✍️', left: '13%', top: '50%' },
	{ title: 'Art', emoji: '🎨', left: '1%', top: '30%' },
	{ title: 'Volunteering', emoji: '🤝', left: '70%', top: '80%' },
];

export const AboutSection = () => {
	const constraintRef = useRef(null);
	return (
		<div className='py-20 lg:py-28'>
			<div className='container'>
				<SectionHeader
					eyebrow='About Me'
					title='A Glimpse Into My World'
					description='Learn more about who I am, What I do, and what Inspires me.'
				/>
				<div className='mt-20 flex flex-col gap-8'>
					<div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
						<Card className='h-[320px] md:col-span-2 lg:col-span-1'>
							<CardHeader
								title='My Reads'
								description='Explore the books shaping my perspectives'
							/>
							<div className='mx-auto mt-8 w-40'>
								<Image src={bookImage} alt='Book Cover' />
							</div>
						</Card>
						<Card className='h-[320px] p-0 md:col-span-3 lg:col-span-2'>
							<CardHeader
								title='My Toolbox'
								description='Explore the technologies and tools I use to craft exceptional digital experiences'
								className='px-6 pt-6'
							/>
							<ToolboxItems
								items={toolboxItems}
								className='mt-6'
								itemsWrapperClassName='animate-move-left [animation-duration:30s]'
							/>
							<ToolboxItems
								items={toolboxItems}
								className='mt-6'
								itemsWrapperClassName='animate-move-right [animation-duration:20s]'
							/>
						</Card>
					</div>
					<div className='grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3'>
						<Card className='flex h-[320px] flex-col p-0 md:col-span-3 lg:col-span-2'>
							<CardHeader
								title='My Hobbies'
								description='Discover the activities that fuel my creativity and passion beyond coding'
								className='px-6 py-6'
							/>
							<div
								className='relative flex-1'
								ref={constraintRef}
							>
								{hobbies.map((hobby) => (
									<motion.div
										key={hobby.title}
										className='absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-3 py-1'
										style={{
											left: hobby.left,
											top: hobby.top,
										}}
										drag
										dragConstraints={constraintRef}
										dragElastic={0.2}
										whileHover={{ scale: 1.1 }}
									>
										<span className='font-medium text-gray-950'>
											{hobby.title}
										</span>
										<span>{hobby.emoji}</span>
									</motion.div>
								))}
							</div>
						</Card>
						<Card className='relative h-[320px] p-0 md:col-span-2 lg:col-span-1'>
							<Image
								src={mapImage}
								alt='map Image'
								className='h-full w-full object-cover'
							/>
							<div className='absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full after:absolute after:inset-0 after:rounded-full after:outline after:outline-2 after:-outline-offset-2 after:content-[""]'>
								<div className='absolute inset-0 -z-20 animate-ping rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 [animation-duration:2s]'></div>
								<div className='absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400'></div>
								<Image
									src={memojiImage}
									alt='Memoji on a map'
									className='h-10 w-10 object-contain'
								/>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};
