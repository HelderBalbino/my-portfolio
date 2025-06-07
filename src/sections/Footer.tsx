import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

const footerLinks = [
	{
		title: 'LinkedIn',
		href: 'https://www.linkedin.com/in/helderbalbino/',
	},
	{
		title: 'GitHub',
		href: '/projects',
	},
];

export const Footer = () => {
	return (
		<footer>
			<div className='container'>
				<div className='flex flex-col items-center border-t border-white/15 py-6 text-base'>
					<div className='text-white/40'>
						&copy; {new Date().getFullYear()} Helder Balbino. All
						rights reserved.
					</div>
					<nav>
						{footerLinks.map((link) => (
							<a
								href=''
								key={link.title}
								className='gap.1.5 inline-flex'
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
