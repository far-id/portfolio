import Sidebar from '@/components/app/sidebar';
import { routing } from '@/i18n/routing';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

type Props = {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Readonly<Props>) {
	// Ensure that the incoming `locale` is valid
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}
	return (
		<NextIntlClientProvider locale={locale}>
			<div className='flex flex-1 grow overflow-hidden size-full'>
				<Sidebar />
				<div className='relative overflow-auto size-full'>{children}</div>
			</div>
		</NextIntlClientProvider>
	);
}
