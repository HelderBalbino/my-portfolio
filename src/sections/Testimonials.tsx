import memojiAvatar1 from '@/assets/images/memoji-avatar-1.png';
import memojiAvatar2 from '@/assets/images/memoji-avatar-2.png';
import memojiAvatar3 from '@/assets/images/memoji-avatar-3.png';
import memojiAvatar4 from '@/assets/images/memoji-avatar-4.png';
import { Card } from '@/components/card';
import { SectionHeader } from '@/components/SectionHeader';
import Image from 'next/image';
import { Fragment } from 'react';

const testimonials = [
	{
		name: 'Natalie Porter',
		position: 'Director of Employee Experience at NTT Data.',
		text: "'I had the pleasure of working with Helder during the Tech Native Digital Web Development Bootcamp. He is easy-going, communicative, and a great team player. Working with him was always smooth and productive, brings a positive attitude and collaborates well with others. I’m confident he will be a valuable asset to any team.",
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
		text: 'I had the pleasure of working with Helder during the TechNative Digital bootcamp, and I’m grateful for the experience. His positivity is infectious, his curiosity for learning is inspiring, and he fits seamlessly into any team. Beyond that, he’s a strong coder with a genuine interest in exploring different solutions to problems.',
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
				<div className='mt-16 flex overflow-x-clip py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] lg:mt-24'>
					<div className='animate-move-left flex flex-none gap-9 pr-8 [animation-duration:60s] hover:[animation-play-state:paused]'>
						{[...new Array(2)].fill(0).map((_, index) => (
							<Fragment key={index}>
								{testimonials.map((testimonial) => (
									<Card
										key={testimonial.name}
										className='max-w-xs transition-transform duration-300 ease-in-out hover:scale-[1.05] md:max-w-md md:p-8'
									>
										<div className='flex items-center gap-1'>
											<div className='mr-4 inline-flex items-center justify-center rounded-full bg-gray-100'>
												<Image
													className='inline-flex size-14 max-h-full rounded-full'
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
										<p className='mt-4 text-sm md:mt-6 md:text-base'>
											{testimonial.text}
										</p>
									</Card>
								))}
							</Fragment>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
