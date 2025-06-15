import { PropsWithChildren } from 'react';

export const HeroOrbit = ({
	children,
	size,
	rotation,
	shouldOrbit = false,
	orbitDuration,
}: PropsWithChildren<{
	size: number;
	rotation: number;
	shouldOrbit?: boolean;
	orbitDuration?: string;
}>) => {
	return (
		<div className='absolute left-1/2 top-1/2 -z-20 -translate-x-1/2 -translate-y-1/2'>
			<div className='{twMerge(shouldOrbit === true && animate-spin)} style{{animationDuration: orbitDuration}}'>
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
