import { Icon } from '@/components/app/icon';

export const NAVIGATION: {
	label: string;
	icon: (typeof Icon)[keyof typeof Icon];
	path: string;
	tooltip: string;
	children?: {
		label: string;
		path: string;
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
				label: 'Personal',
				path: '/about/personal',
			},
			{
				label: 'Skills',
				path: '/about/skills',
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
