'use client';
import FadeIn from '@/components/app/fade-in';
import { Icon } from '@/components/app/icon';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { NAVIGATION } from '@/constants/navigation';
import { Link, usePathname } from '@/i18n/navigation';

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const pathname = usePathname();
	const tabs = NAVIGATION.find((nav) => nav.label === 'About')?.children;
	if (tabs === undefined) {
		return null;
	}
	return (
		<div className='grid grid-cols-12 overflow-hidden h-full'>
			<div className='col-span-3 xl:col-span-2 border-r overflow-auto'>
				<Accordion type='single' collapsible defaultValue='about'>
					<AccordionItem value='about' defaultChecked>
						<AccordionTrigger className='border-b px-4 py-3 text-left'>About Me</AccordionTrigger>
						<AccordionContent>
							<FadeIn>
								<div className='py-4 border-b flex flex-col gap-2'>
									{tabs.map((tab) => (
										<Link
											key={tab.path}
											href={tab.path}
											className={`text-sm hover:underline flex gap-x-2 items-center underline-offset-2 px-4 ${
												pathname === tab.path && 'bg-muted'
											}`}
										>
											<Icon.Typescript className='size-4 shrink-0' />
											{tab.label}
										</Link>
									))}
								</div>
							</FadeIn>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
			<div className='col-span-9 xl:col-span-10 overflow-auto'>{children}</div>
		</div>
	);
}
