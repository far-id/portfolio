import { useTranslations } from 'next-intl';

export default function Footer() {
	const t = useTranslations('layout');
	return <div className='bg-background text-foreground border-t px-1'>{t('footer.branch')}</div>;
}
