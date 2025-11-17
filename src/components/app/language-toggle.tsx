'use client';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageToggle() {
	const router = useRouter();
	const pathname = usePathname();
	const segments = pathname.split('/');
	const locales = ['en', 'id', 'jp'];


	function switchLocale(newLocale: string) {
		segments[1] = newLocale;
		router.replace(segments.join('/'));
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					size='icon'
					className='bg-transparent text-foreground hover:bg-transparent cursor-pointer rounded-full focus-visible:ring-0 border-0'
				>
					<span>{segments[1]}</span>
					<span className='sr-only'>Toggle language</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				{locales.map((locale) => (
					<DropdownMenuItem
						key={locale}
						onClick={() => switchLocale(locale)}
						className={`capitalize ${segments[1] === locale && 'font-bold'}`}
					>
						{locale === 'en' && 'English'}
						{locale === 'jp' && '日本語'}
						{locale === 'id' && 'Indonesia'}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
