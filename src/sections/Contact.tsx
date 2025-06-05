import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

export const ContactSection = () => {
	return (
		<div className='py-16'>
			<div className='container'>
				<div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center'>
					<h2 className='font-serif text-2xl'>
						Let's create something amazing together!
					</h2>
					<p className='text-sm mt-4'>
						Whether you have a project in mind or just want to say
						hello, I’d love to hear from you.
					</p>
					<button className='text-white bg-gray-900 inline-flex items-center justify-center h-12 gap-2 px-6 mt-6 rounded-xl hover:bg-gray-800 transition-colors'>
						<span className='font-semibold'>Contact Me</span>
						<ArrowUpRightIcon className='size-4' />
					</button>
				</div>
			</div>
		</div>
	);
};
