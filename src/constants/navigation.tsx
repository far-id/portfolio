import { Icon } from '@/components/app/icon';
import Personal from '@/markdown/personal.mdx';
import Skills from '@/markdown/skills.mdx';

export const NAVIGATION: {
	label: string;
	icon: (typeof Icon)[keyof typeof Icon];
	path: string;
	tooltip: string;
	children?: {
		label: string;
		path: string;
		mdx_component?: React.ComponentType;
	}[];
}[] = [
	{
		label: 'Home',
		icon: Icon.home,
		path: '/',
		tooltip: '_Home',
	},
	{
		label: 'About',
		icon: Icon.about,
		path: '/about',
		tooltip: '_About',
		children: [
			{
				label: '_personal.ts',
				path: '/about/personal.ts',
				mdx_component: Personal,
			},
			{
				label: '_skills.ts',
				path: '/about/skills.ts',
				mdx_component: Skills,
			},
		],
	},
	{
		label: 'Projects',
		icon: Icon.projects,
		path: '/projects',
		tooltip: '_Projects',
	},
	{
		label: 'Contact',
		icon: Icon.contact,
		path: '/contact',
		tooltip: '_Contact',
	},
];
