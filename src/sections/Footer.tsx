import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const footerLinks = [
	{
		title: 'LinkedIn',
		href: 'https://www.linkedin.com/in/helder-balbino-18184a100/',
	},
	{
		title: 'GitHub',
		href: 'https://github.com/HelderBalbino',
	},
];

export const Footer = () => {
	return (
		<footer className='relative overflow-x-clip'>
			<div className='absolute bottom-0 left-1/2 -z-10 h-[400px] w-[1600px] -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]'></div>
			<div className='container'>
				<div className='flex flex-col items-center gap-8 border-t border-white/15 py-6 text-base md:flex-row md:justify-between'>
					<div className='text-white/40'>
						&copy; {new Date().getFullYear()} Helder Balbino. All
						rights reserved.
					</div>
					<nav className='flex flex-col items-center gap-3 md:flex-row md:gap-6'>
						{footerLinks.map((link) => (
							<a
								href={link.href}
								key={link.title}
								className='inline-flex gap-1.5'
								target='_blank'
								rel='noopener noreferrer'
							>
								<span className='font-semibold'>
									{link.title}
								</span>
								<ArrowUpRightIcon className='size-4' />
							</a>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
};
