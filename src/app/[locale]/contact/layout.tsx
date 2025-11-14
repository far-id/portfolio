'use client';
import FadeIn from '@/components/app/fade-in';
import { Icon } from '@/components/app/icon';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { siteConfig } from '@/constants/siteConfig';
import { Link } from '@/i18n/navigation';
import React from 'react';

const CONTACT = [
	{
		label: 'Email',
		path: siteConfig.links.mailto,
		icon: Icon.email,
	},
	{
		label: 'LinkedIn',
		path: siteConfig.links.linkedin,
		icon: Icon.fillLinkedin,
	},
	{
		label: 'GitHub',
		path: siteConfig.links.github,
		icon: Icon.fillGithub,
	},
	{
		label: 'Instagram',
		path: siteConfig.links.instagram,
		icon: Icon.instagram,
	},
];

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className='grid grid-cols-12 overflow-hidden h-full'>
			<div className='col-span-3 xl:col-span-2 border-r overflow-auto'>
				<Accordion type='single' collapsible defaultValue='about'>
					<AccordionItem value='about' defaultChecked>
						<AccordionTrigger className='border-b px-4 py-3 text-left'>About Me</AccordionTrigger>
						<AccordionContent>
							<FadeIn>
								<div className='py-4 border-b flex flex-col gap-2'>
									{CONTACT.map((mail, index) => (
										<Link
											key={index}
											href={mail.path}
											target='_blank'
											className={`text-sm hover:underline flex gap-x-2 items-center underline-offset-2 px-4`}
										>
											<mail.icon className='size-4 shrink-0' />
											{mail.label}
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
