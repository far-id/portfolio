import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Fira_Code } from 'next/font/google';
import AppLayout from '@/layouts/app.layout';
import { ThemeProvider } from '@/components/app/theme-provider';
import { useLocale } from 'next-intl';
import { Toaster } from '@/components/ui/sonner';
import { DesktopOnly } from '@/components/app/desktop-only';

const firaCode = Fira_Code({
	variable: '--font-fira-code',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL('https://faridrw.my.id'),

	title: {
		default: 'Farid Rizky Wijaya',
		template: '%s | Farid Rizky Wijaya',
	},

	description:
		'Portfolio Farid Rizky Wijaya, Lulusan Teknik Informatika UHAMKA dan Bangkit Academy 2024 Cloud Computing yang berfokus pada Laravel, Node.js, TypeScript, React, Cloud Computing, dan Google Cloud.',

	keywords: [
		'Farid Rizky Wijaya',
		'Backend Developer',
		'Web Developer',
		'Laravel Developer',
		'Node.js Developer',
		'TypeScript Developer',
		'React Developer',
		'Cloud Computing',
		'Google Cloud',
	],

	authors: [
		{
			name: 'Farid Rizky Wijaya',
		},
	],

	creator: 'Farid Rizky Wijaya',

	openGraph: {
		type: 'website',
		locale: 'id_ID',
		url: 'https://faridrw.my.id',
		siteName: 'Farid Rizky Wijaya',
		title: 'Farid Rizky Wijaya',
		description:
			'Portfolio dan proyek Farid Rizky Wijaya, Lulusan Teknik Informatika UHAMKA dan Bangkit Academy 2024 Cloud Computing yang berfokus pada Laravel, Node.js, TypeScript, React, dan Cloud Computing.',
		images: [
			{
				url: '/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Farid Rizky Wijaya',
			},
		],
	},

	twitter: {
		card: 'summary_large_image',
		title: 'Farid Rizky Wijaya',
		description:
			'Portfolio Farid Rizky Wijaya, Lulusan Teknik Informatika UHAMKA dan Bangkit Academy 2024 Cloud Computing.',
		images: ['/og-image.png'],
	},

	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
	const locale = useLocale();
	return (
		<html lang={locale} className='dark' style={{ colorScheme: 'dark' }} suppressHydrationWarning>
			<body
				className={`${firaCode.variable} font-sans antialiased transition-colors duration-200 text-sm`}
			>
				<DesktopOnly />
				<ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
					<AppLayout>{children}</AppLayout>
				</ThemeProvider>
				<Toaster />
				{/* Background effect */}
				<div className='grain-noise fixed inset-0 pointer-events-none opacity-30' />
			</body>
		</html>
	);
}
