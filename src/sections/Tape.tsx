import StarIcon from '@/assets/icons/star.svg';

const words = [
	'Performant',
	'Accessible',
	'Secure',
	'Interactive',
	'Scalable',
	'User-friendly',
	'Maintainable',
	'Search Optimized',
	'Usable',
	'Reliable',
];

export const TapeSection = () => {
	return (
		<div className='py-16'>
			<div className='bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip'>
				<div className='flex'>
					<div className='flex flex-none gap-4'>
						{words.map((word) => (
							<div
								key={word}
								className='inline-flex gap-4 items-center'
							>
								<span className='text-gray-900 uppercase font-extrabold text-sm'>
									{word}
								</span>
								<StarIcon className='size-6' />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
