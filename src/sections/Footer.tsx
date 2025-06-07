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
				<div>
					<div>
						&copy; {new Date().getFullYear()} Helder Balbino. All
						rights reserved.
					</div>
					<nav>
						{footerLinks.map((link) => (
							<a href='' key={link.title}>
								<span>{link.title}</span>
								<ArrowUpRightIcon />
							</a>
						))}
					</nav>
				</div>
			</div>
		</footer>
	);
};
