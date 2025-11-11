'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import { Icon } from '@/components/app/icon';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ThemeToggle() {
	const { setTheme, theme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Prevent hydration mismatch by only rendering theme-dependent UI after mount
	useEffect(() => {
		const t = setTimeout(() => setMounted(true), 0);
		return () => clearTimeout(t);
	}, []);
	function changeTheme(theme: string) {
		setTimeout(() => {
			setTheme(theme);
		}, 200);
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className='flex items-center'>
				<Button
					variant='outline'
					size='icon'
					className='rounded-full bg-white dark:bg-black size-fit text-foreground border-0'
				>
					<AnimatePresence mode='wait' initial={false}>
						{mounted ? (
							theme === 'dark' ? (
								<motion.div
									key='moon'
									initial={{ opacity: 0, rotate: -90 }}
									animate={{ opacity: 1, rotate: 0 }}
									transition={{ duration: 0.2 }}
									exit={{ opacity: 0, rotate: 90 }}
								>
									<Icon.moon className='size-4' />
								</motion.div>
							) : (
								<motion.div
									key='sun'
									initial={{ opacity: 0, rotate: 90 }}
									animate={{ opacity: 1, rotate: 0 }}
									transition={{ duration: 0.2 }}
									exit={{ opacity: 0, rotate: -90 }}
								>
									<Icon.sun className='size-4' />
								</motion.div>
							)
						) : null}
					</AnimatePresence>
					<span className='sr-only'>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align='end'>
				<DropdownMenuItem onClick={() => changeTheme('light')}>Light</DropdownMenuItem>
				<DropdownMenuItem onClick={() => changeTheme('dark')}>Dark</DropdownMenuItem>
				<DropdownMenuItem onClick={() => changeTheme('system')}>System</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
