import { PropsWithChildren } from 'react';

export const HeroOrbit = ({
	children,
	size,
	rotation,
	spinDuration,
}: PropsWithChildren<{
	size: number;
	rotation: number;
	spinDuration: number;
}>) => {
	return (
		<div className='absolute left-1/2 top-1/2 -z-20 -translate-x-1/2 -translate-y-1/2'>
			<div className='animate-spin [animation-duration:60s]'>
				<div
					className='flex items-start justify-start'
					style={{
						transform: `rotate(${rotation}deg)`,
						height: `${size}px`,
						width: `${size}px`,
					}}
				>
					<div
						className='inline-flex'
						style={{ transform: `rotate(${rotation * -1}deg)` }}
					>
						{children}
					</div>
				</div>
			</div>
		</div>
	);
};
