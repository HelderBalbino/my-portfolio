import grainImage from '@/assets/images/grain.jpg';
import { ComponentPropsWithoutRef } from 'react';
import { twMerge } from 'tailwind-merge';

export const Card = (
	{ className, children, ...other }: ComponentPropsWithoutRef<'div'>, // Optional className prop for additional styling
) => {
	return (
		<div
			className={twMerge(
				'relative z-0 overflow-hidden rounded-3xl bg-gray-800 p-6 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 after:content-[""]',
				className,
			)}
			{...other} // Spread other props to the div
		>
			<div
				className='absolute inset-0 -z-10 opacity-5'
				style={{
					backgroundImage: `url(${grainImage.src})`,
				}}
			></div>
			{children}
		</div>
	);
};
