import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

export const ContactSection = () => {
	return (
		<div className='py-16'>
			<div className='container'>
				<h2>Let's create something amazing together!</h2>
				<p>
					Whether you have a project in mind or just want to say
					hello, I’d love to hear from you.
				</p>
				<button>
					<span>Contact Me</span>
					<ArrowUpRightIcon />
				</button>
			</div>
		</div>
	);
};
