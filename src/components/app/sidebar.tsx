'use client';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { NAVIGATION } from '@/constants/navigation';
import { useEffect, useRef } from 'react';
import { Link as LocaleLink } from '@/i18n/navigation';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function Sidebar() {
	const locale = useLocale();
	console.log('Locale in Sidebar:', locale);
	const pathname = usePathname();
	const activeRef = useRef<HTMLDivElement>(null);
	const navItemRef = useRef<HTMLDivElement>(null);

	const handleTransition = (index: number) => {
		const activeBack = activeRef.current;
		const navItem = navItemRef.current;

		if (activeBack && navItem) {
			activeBack.style.transform = `translateY(${index * navItem.offsetHeight}px)`;
		}
	};

	useEffect(() => {
		const activeIndex = NAVIGATION.findIndex((item) =>
			item.path.startsWith(`/${pathname.split('/').slice(2, 3).join('/')}`)
		);
		handleTransition(activeIndex);
	}, [pathname]);

	return (
		<nav className='h-full w-[70px] flex text-sidebar-foreground flex-col items-center justify-between bg-sidebar border-b md:border-b-0 border-r py-3 md:py-10 px-5 md:px-0 overflow-y-auto'>
			<div className='md:min-h-[100px]'>
				<LocaleLink href='/'>
					<h1 className='select-none text-xl font-bold'>Far</h1>
				</LocaleLink>
			</div>
			<div className='hidden md:flex flex-col w-full relative'>
				<div
					ref={activeRef}
					className='absolute top-0 h-14 w-full border-y z-10 translate-y-0 transition-transform duration-300 ease-in-out'
				/>
				{NAVIGATION.map((item) => {
					return (
						<div className='h-14 grid place-items-center z-20' ref={navItemRef} key={item.path}>
							<Tooltip>
								<TooltipTrigger>
									<Link href={`/${locale}${item.path}`}>
										<item.icon />
									</Link>
								</TooltipTrigger>
								<TooltipContent>
									<p>{item.tooltip}</p>
								</TooltipContent>
							</Tooltip>
						</div>
					);
				})}
			</div>
		</nav>
	);
}
