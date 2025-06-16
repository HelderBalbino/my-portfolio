export const Header = () => {
	return (
		<div className='fixed top-3 z-10 flex w-full items-center justify-center'>
			<nav className='flex gap-1 rounded-full border border-white/15 bg-white/10 p-0.5 backdrop-blur'>
				<a
					href='#home'
					className='nav-item hover:bg-white hover:text-gray-900'
				>
					Home
				</a>
				<a
					href='#projects'
					className='nav-item hover:bg-white hover:text-gray-900'
				>
					Projects
				</a>
				<a
					href='#about'
					className='nav-item hover:bg-white hover:text-gray-900'
				>
					About
				</a>
				<a
					href='#contact'
					className='nav-item hover:bg-white hover:text-gray-900'
				>
					Contact
				</a>
			</nav>
		</div>
	);
};
