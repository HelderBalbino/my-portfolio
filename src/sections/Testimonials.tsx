import memojiAvatar1 from '@/assets/images/memoji-avatar-1.png';
import memojiAvatar2 from '@/assets/images/memoji-avatar-2.png';
import memojiAvatar3 from '@/assets/images/memoji-avatar-3.png';
import memojiAvatar4 from '@/assets/images/memoji-avatar-4.png';
import { SectionHeader } from '@/components/SectionHeader';
import Image from 'next/image';
import grainImage from '@/assets/images/grain.jpg';

const testimonials = [
	{
		name: 'Natalie Porter',
		position: 'Marketing director at TechStartups',
		text: "Helder was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
		avatar: memojiAvatar1,
	},
	{
		name: 'Jo Pickering',
		position: 'Head of Design at GreenLeaf',
		text: 'Working with Helder was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.',
		avatar: memojiAvatar2,
	},
	{
		name: 'Daniel White',
		position: 'CEO at InnovateCorp',
		text: "Helder's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
		avatar: memojiAvatar3,
	},
	{
		name: 'Ramsey Ediku',
		position: 'Product Manager @ GlobalTech',
		text: "Helder is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
		avatar: memojiAvatar4,
	},
];

export const TestimonialsSection = () => {
	return (
		<div className='py-16'>
			<div className='container'>
				<SectionHeader
					eyebrow='Testimonials'
					title='What people say about me'
					description="Don't just take my word for it. See what some wonderful people I've worked with have to say."
				/>
				<div>
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.name}
							className='bg-gray-800 rounded-3xl p-6 relative overflow-hidden z-0'
						>
							<div
								className='absolute inset-0 opacity-5 -z-10'
								style={{
									backgroundImage: `url(${grainImage.src})`,
								}}
							></div>
							<Image
								className='rounded-full mb-4'
								src={testimonial.avatar}
								alt={testimonial.name}
							/>
							<div>{testimonial.name}</div>
							<div>{testimonial.position}</div>
							<p>{testimonial.text}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
