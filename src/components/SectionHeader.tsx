export const SectionHeader = ({
	title,
	eyebrow,
	description,
}: {
	title: string;
	eyebrow: string;
	description: string;
}) => {
	return (
		<>
			<div className='flex justify-center'>
				<p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text'>
					Real-world Results
				</p>
			</div>
			<h2 className='font-serif text-3xl md:text-5xl text-center mt-7'>
				Featured Projects
			</h2>
			<p className='text-center md:text-lg lg:text-xl text-white/60 mt-6 max-w-md mx-auto'>
				See how I transformed concepts into engaging digital experiences
			</p>
		</>
	);
};
