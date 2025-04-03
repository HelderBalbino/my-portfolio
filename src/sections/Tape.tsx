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
			{words.map((word) => (
				<div key={word}>
					<span>{word}</span>
				</div>
			))}
		</div>
	);
};
