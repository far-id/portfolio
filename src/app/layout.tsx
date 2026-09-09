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
	title: 'Farid Rizky Wijaya - Portfolio',
	description: 'Personal portfolio website',
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
