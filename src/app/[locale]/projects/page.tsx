import { useTranslations } from 'next-intl';

export default function Projects() {
	const t = useTranslations('home');
	return <div>{t('welcome')}</div>;
}
