import memojiAvatar1 from '@/assets/images/memoji-avatar-1.png';
import memojiAvatar2 from '@/assets/images/memoji-avatar-2.png';
import memojiAvatar3 from '@/assets/images/memoji-avatar-3.png';
import memojiAvatar4 from '@/assets/images/memoji-avatar-4.png';
import { SectionHeader } from '@/components/SectionHeader';
import Image from 'next/image';
import grainImage from '@/assets/images/grain.jpg';
import { Card } from '@/components/card';

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
				<div className='mt-16 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
					<div className='flex gap-9 flex-none'>
						{testimonials.map((testimonial) => (
							<Card key={testimonial.name} className='max-w-sm'>
								<div className='flex gap-1 items-center'>
									<div className='inline-flex items-center justify-center w-16 h-16 mr-4 rounded-full bg-gray-100'>
										<Image
											className='size-14 inline-flex rounded-full max-h-full'
											src={testimonial.avatar}
											alt={testimonial.name}
										/>
									</div>

									<div>
										<div className='font-semibold'>
											{testimonial.name}
										</div>
										<div className='text-sm text-white/50'>
											{testimonial.position}
										</div>
									</div>
								</div>
								<p className='mt-4'>{testimonial.text}</p>
							</Card>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
