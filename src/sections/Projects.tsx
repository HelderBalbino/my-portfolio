import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png';
import bartendersHubLandingPage from '@/assets/images/bartendersHubLandingPage.png';
import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png';
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png';
import { SectionHeader } from '@/components/SectionHeader';
import { Card } from '@/components/card';
import Image from 'next/image';

const portfolioProjects = [
	{
		company: 'TechNative',
		year: '2025',
		title: 'Mixtapemagic',
		results: [
			{
				title: 'Implemented Dynamic UI Components',
			},
			{ title: 'User Authentication' },
			{ title: ' Fully Responsive' },
		],
		link: 'https://mixtapemagic.netlify.app/',
		github: 'https://github.com/technative-academy/Mixtape-Magic',
		image: darkSaasLandingPage,
	},
	{
		company: 'TechNative',
		year: '2025',
		title: 'Movie Search App',
		results: [
			{ title: 'Dynamic content' },
			{ title: 'API Integration' },
			{ title: 'Fully Responsive' },
		],
		link: 'https://helderbalbino.github.io/Movie-search-app/',
		github: 'https://github.com/helderbalbino/Movie-search-app',
		image: lightSaasLandingPage,
	},
	{
		company: 'TechNative',
		year: '2025',
		title: 'AI Startup Landing Page',
		results: [
			{ title: 'Enhanced user experience by 40%' },
			{ title: 'Improved site speed by 50%' },
			{ title: 'Increased mobile traffic by 35%' },
		],
		link: '',
		image: aiStartupLandingPage,
	},
	{
		company: 'Personal Project',
		year: '2025',
		title: "Bartenders' Hub",
		results: [
			{ title: 'Currently in Progress' },
			{ title: '' },
			{ title: '' },
		],
		link: 'https://bartendershub.vercel.app/',
		github: 'https://github.com/HelderBalbino/BartendersHub',
		image: bartendersHubLandingPage,
	},
];

export const ProjectsSection = () => {
	return (
		<section id='projects' className='pb-16 sm:py-16 lg:py-24'>
			<div className='container'>
				<SectionHeader
					title='Real-world results'
					eyebrow='Featured Projects'
					description='See how I transformed concepts into engaging digital
					experiences'
				/>
				<div className='mt-10 flex flex-col gap-24 md:mt-20'>
					{portfolioProjects.map((project, projectIndex) => (
						<Card
							key={project.title}
							className='sticky px-8 pb-0 pt-8 md:px-10 md:pt-12 lg:px-20 lg:pt-16'
							style={{
								top: `calc(64px + ${projectIndex * 30}px)`,
							}}
						>
							<div className='lg:grid lg:grid-cols-2 lg:gap-16'>
								<div className='lg:pb-16'>
									<div className='inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-sm font-bold uppercase tracking-widest text-transparent'>
										<span>{project.company}</span>
										<span>&bull;</span>
										<span>{project.year}</span>
									</div>

									<h3 className='mt-2 font-serif text-2xl md:mt-5 md:text-4xl'>
										{project.title}
									</h3>
									<hr className='mt-4 border-t-2 border-white/5 md:mt-5' />
									<ul className='mt-4 flex flex-col gap-4'>
										{project.results.map(
											(result, index) => (
												<li
													key={index}
													className='flex gap-2 text-sm text-white/50 md:text-base'
												>
													<CheckCircleIcon className='size-5 text-emerald-300 md:size-6' />
													<span>{result.title}</span>
												</li>
											),
										)}
									</ul>
									<div className='mt-8 flex flex-col gap-4 md:flex-row'>
										<a
											href={project.link}
											target='_blank'
											rel='noopener noreferrer'
										>
											<button className='inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-gray-950 md:w-auto'>
												<span>Live Site</span>
												<ArrowUpRightIcon className='size-4' />
											</button>
										</a>
										<a
											href={project.github}
											target='_blank'
											rel='noopener noreferrer'
										>
											<button className='inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white px-6 font-semibold text-white hover:bg-white hover:text-gray-900 md:w-auto'>
												<span>View on GitHub</span>
												<ArrowUpRightIcon className='size-4' />
											</button>
										</a>
									</div>
								</div>
								<div className='relative'>
									<Image
										src={project.image}
										alt={project.title}
										className='-mb-4 mt-8 md:-mb-0 lg:absolute lg:mt-0 lg:h-full lg:w-auto lg:max-w-none'
									/>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};
