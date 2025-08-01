import type { Metadata } from 'next';
import { Inter, Calistoga } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';

// We can use the `twMerge` function to merge Tailwind classes together
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({
	subsets: ['latin'],
	variable: '--font-serif',
	weight: ['400'],
});

export const metadata: Metadata = {
	title: 'Helder Balbino Portfolio',
	description:
		'Created with React, TypeScript, Tailwind CSS, Next.js, and Love',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={twMerge(
					inter.variable,
					calistoga.variable,
					'bg-gray-900 font-sans text-white antialiased',
				)}
			>
				{children}
			</body>
		</html>
	);
}
