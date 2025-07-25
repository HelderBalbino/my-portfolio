import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
	return (
		<div id='contact' className='py-16 pt-12 lg:py-24 lg:pt-20'>
			<div className='container'>
				<div className='relative z-0 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-300 to-sky-400 px-10 py-8 text-center text-gray-900 md:text-left'>
					<div
						className='absolute inset-0 -z-10 opacity-5'
						style={{ backgroundImage: `url(${grainImage.src})` }}
					></div>
					<div className='flex flex-col items-center gap-8 md:flex-row md:gap-16'>
						<div>
							<h2 className='font-serif text-2xl md:text-3xl'>
								Let's create something amazing together!
							</h2>
							<p className='mt-4 text-sm md:text-base'>
								Whether you have a project in mind or just want
								to say hello, I’d love to hear from you.
							</p>
						</div>
						<div>
							<a
								href="mailto:helderbalbino@googlemail.com?subject=Let's work together&body=Hello Helder! I'd like to discuss a project with you."
								className='inline-flex h-12 w-max items-center gap-2 rounded-xl border border-gray-900 bg-gray-900 px-6 text-white transition-colors hover:border-gray-800 hover:bg-gray-700'
							>
								<span className='font-semibold'>
									Contact Me
								</span>
								<ArrowUpRightIcon className='size-4' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
