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
		<div>
			<div className='flex gap-4'>
				{words.map((word) => (
					<div key={word} className='inline-flex gap-4'>
						<span>{word}</span>
						<StarIcon />
					</div>
				))}
			</div>
		</div>
	);
};
