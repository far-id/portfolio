import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export default function LanguageToggle() {
	function changeLanguage(language: string) {}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant='outline'
					size='icon'
					className='rounded-full bg-white dark:bg-black p-1 text-foreground border-0'
				>
					<span>id</span>
					<span>en</span>
					<span>jp</span>
					<span className='sr-only'>Toggle language</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem onClick={() => changeLanguage('id')}>Indonesian</DropdownMenuItem>
				<DropdownMenuItem onClick={() => changeLanguage('en')}>English</DropdownMenuItem>
				<DropdownMenuItem onClick={() => changeLanguage('jp')}>Japanese</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
