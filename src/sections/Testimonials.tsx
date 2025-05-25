import memojiAvatar1 from '@/assets/images/memoji-avatar-1.png';
import memojiAvatar2 from '@/assets/images/memoji-avatar-2.png';
import memojiAvatar3 from '@/assets/images/memoji-avatar-3.png';
import memojiAvatar4 from '@/assets/images/memoji-avatar-4.png';
import { SectionHeader } from '@/components/SectionHeader';
import Image from 'next/image';
import { Card } from '@/components/card';

const testimonials = [
	{
		name: 'Natalie Porter',
		position: 'Director of Employee Experience at NTT Data.',
		text: "Helder was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
		avatar: memojiAvatar1,
	},
	{
		name: 'Kamila Wilczynska',
		position: 'Web Developer at GB News.',
		text: 'I had the pleasure of working with Helder during the Tech Native Digital Web Development Bootcamp. He is easy-going, communicative, and a great team player. Working with him was always smooth and productive, brings a positive attitude and collaborates well with others. I’m confident he will be a valuable asset to any team.',
		avatar: memojiAvatar2,
	},
	{
		name: 'Pete Goodman',
		position: '',
		text: 'Helder has been a pleasure to work with. He recently completed an intensive 16-week software development bootcamp, during which he consistently demonstrated his development skills, particularly in HTML, CSS, JavaScript, and React. He worked on several excellent projects during the course and was a consistently positive presence in the cohort. He’s personable, collaborative, and easy to get on with.',
		avatar: memojiAvatar3,
	},
	{
		name: 'Elyas Faiq',
		position: 'Software Engineering at Certn.',
		text: "Helder is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
		avatar: memojiAvatar4,
	},
];

export const TestimonialsSection = () => {
	return (
		<div className='py-16 lg:py-24'>
			<div className='container'>
				<SectionHeader
					eyebrow='Testimonials'
					title='What people say about me'
					description="Don't just take my word for it. See what these wonderful people have to say about me."
				/>
				<div className='mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
					<div className='flex gap-9 flex-none'>
						{testimonials.map((testimonial) => (
							<Card
								key={testimonial.name}
								className='max-w-xs md:max-w-md md:p-8'
							>
								<div className='flex gap-1 items-center'>
									<div className='inline-flex items-center justify-center mr-4 rounded-full bg-gray-100'>
										<Image
											className='size-14 inline-flex rounded-full max-h-full'
											src={testimonial.avatar}
											alt={testimonial.name}
											width={64}
											height={64}
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
								<p className='mt-3 md:mt-6 text-sm md:text-base'>
									{testimonial.text}
								</p>
							</Card>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
