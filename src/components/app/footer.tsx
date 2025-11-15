'use client';
import { useState } from 'react';
import { Icon } from './icon';
import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/constants/siteConfig';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export default function Footer() {
	const [rotateStatus, setRotateStatus] = useState<boolean>(false);
	function rotateIcon() {
		setRotateStatus(!rotateStatus);
		setTimeout(() => {
			setRotateStatus(false);
		}, 1000);
	}
	return (
		<div className='flex justify-between items-center bg-background text-foreground w-full border-t text-xs'>
			<div className='flex items-center border-r divide-x p-0 h-full'>
				<Link
					href={siteConfig.repository}
					target='_blank'
					className='bg-blue-700 gap-x-1 flex items-center justify-center w-[66px] h-full'
				>
					<Icon.GitFork className='size-4 text-white' />
					<span>main</span>
				</Link>
				<button
					aria-label='refetch'
					onClick={rotateIcon}
					className='h-full px-1 group cursor-pointer'
				>
					<Icon.Sync
						className={`size-4 text-foreground/80 group-hover:text-foreground ${rotateStatus && 'rotate-360 duration-1000 transition-transform'}`}
					/>
				</button>
				<div className='flex items-center h-full px-1'>
					<Tooltip>
						<TooltipTrigger className='flex items-center gap-x-2 justify-center text-foreground/80'>
							<div className='flex gap-x-0.5 items-center'>
								<Icon.XCircle className='size-3.5 ' />
								<span>0</span>
							</div>
							<div className='flex gap-x-0.5 items-center'>
								<Icon.Warning className='size-4' />
								<span>0</span>
							</div>
						</TooltipTrigger>
						<TooltipContent>
							<p>No Problems</p>
						</TooltipContent>
					</Tooltip>
				</div>
			</div>
			<div className='flex items-center border-l divide-x h-full'>
				<div className='flex items-center gap-x-1 p-1'>
					<Icon.DoubleCheck className='size-4 text-foreground/80' />
					<span>Prettier</span>
				</div>
				<Link
					href={siteConfig.links.github}
					target='_blank'
					className='flex items-center gap-x-1 p-1'
				>
					<span>far-id</span>
					<Icon.Github className='size-3.5 text-foreground/80' />
				</Link>
			</div>
		</div>
	);
}
