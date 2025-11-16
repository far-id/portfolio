import { Icon } from '@/components/app/icon';
import { siteConfig } from '@/constants/siteConfig';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const socialLinks: {
	name: string;
	href: string;
	icon: (typeof Icon)[keyof typeof Icon];
}[] = [
	{
		name: 'Github',
		href: siteConfig.links.github,
		icon: Icon.Github,
	},
	{
		name: 'Instagram',
		href: siteConfig.links.instagram,
		icon: Icon.Instagram,
	},
	{
		name: 'LinkedIn',
		href: siteConfig.links.linkedin,
		icon: Icon.Linkedin,
	},
] as const;

export default function IndexPage() {
	const t = useTranslations('home');

	return (
		<div className='flex items-center justify-center size-full'>
			<div className='flex flex-col items-center justify-center'>
				<p className='text-lg tracking-widest text-muted-foreground'>{t('greeting')}</p>
				<h1 className='text-5xl font-bold mt-4 mb-2'>FARID RIZKY WIJAYA</h1>
				<h2 className='text-xl mb-6 gap-x-3 flex mt-2'>
					<span>&gt;</span>
					<span className='bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent'>
						{t('developer')}
					</span>
				</h2>
				<p className='max-w-xl text-center text-muted-foreground'>{`// ${t('githubDescription')}`}</p>
				<div className='flex gap-x-2'>
					<span className='text-[#f9a245]'>const </span>
					<span className='text-[#1979D7]'>githubLink </span>
					<span className='text-[#C87F30]'>{' = '}</span>
					<Link
						target='_blank'
						href={siteConfig.links.github}
						className='text-[#8DC5EB] hover:underline underline-offset-2'
					>{`'${siteConfig.links.github}'`}</Link>
					<span className='text-[#C9D1D9] -ml-2'>;</span>
				</div>
				<div className='flex gap-x-4 mt-6'>
					{socialLinks.map((social) => (
						<Link
							key={social.name}
							target='_blank'
							href={social.href}
							className='flex group gap-x-2 items-center hover:underline underline-offset-2'
						>
							<social.icon className='size-6 group-hover:scale-110 transition-transform duration-200' />
							{social.name}
							<Icon.Share className='ml-1 size-4 opacity-0 group-hover:opacity-100 duration-200 transition-opacity' />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
