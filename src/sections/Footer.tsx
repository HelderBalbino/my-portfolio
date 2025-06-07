export const Footer = () => {
	return (
		<footer>
			<div className='container py-10'>
				<div>
					<div>
						&copy; {new Date().getFullYear()} Helder Balbino. All
						rights reserved.
					</div>
					<nav>
						<a href=''>LinkedIn</a>
						<a href=''>GitHub</a>
					</nav>
				</div>
			</div>
		</footer>
	);
};
