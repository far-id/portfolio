import { Icon } from '@/components/app/icon';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

const socialLinks: {
	name: string;
	href: string;
	icon: (typeof Icon)[keyof typeof Icon];
}[] = [
	{
		name: 'Github',
		href: 'https://github.com/far-id',
		icon: Icon.github,
	},
	{
		name: 'Instagram',
		href: 'https://www.instagram.com/faridrizkywijaya',
		icon: Icon.instagram,
	},
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/farid-rizky-wijaya-438a60212',
		icon: Icon.linkedin,
	},
] as const;

export default async function IndexPage({ locale }: { locale: string }) {
	const t = await getTranslations({
		locale: locale,
		namespace: 'home',
	});

	return (
		<div className='flex items-center justify-center size-full'>
			<div className='flex flex-col items-center justify-center'>
				<p className='text-lg tracking-widest text-muted-foreground'>HI ALL. I AM</p>
				<h1 className='text-5xl font-bold mt-4 mb-2'>FARID RIZKY WIJAYA</h1>
				<h2 className='text-xl mb-6 gap-x-3 flex mt-2'>
					<span>&gt;</span>
					<span className='bg-linear-to-r from-foreground to-muted-foreground bg-clip-text text-transparent'>
						Software Developer
					</span>
				</h2>
				<p className='max-w-xl text-center text-muted-foreground'>{`// you can also see it on my Github Page`}</p>
				<div className='flex gap-x-2'>
					<span className='text-[#f9a245]'>const </span>
					<span className='text-[#1979D7]'>githubLink </span>
					<span className='text-[#C87F30]'>{' = '}</span>
					<Link
						target='_blank'
						href={'https://github.com/far-id'}
						className='text-[#8DC5EB] hover:underline underline-offset-2'
					>{`'https://github.com/far-id'`}</Link>
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
							<Icon.share className='ml-1 size-4 opacity-0 group-hover:opacity-100 duration-200 transition-opacity' />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
