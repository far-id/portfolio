import FadeIn from '@/components/app/fade-in';
import { Icon } from '@/components/app/icon';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export default function NotFound() {
	return (
		<div className='flex items-center justify-center h-full'>
			<FadeIn>
				<div className='flex justify-center flex-col items-center text-center max-w-md px-4'>
					<Icon.Warning className='size-12 mb-4 mx-auto' />
					<h1 className='text-xl font-bold mb-2'>Page Not Found</h1>
					<p className='text-center text-muted-foreground tracking-wide text-balance'>
						The page you are looking for does not exist.
					</p>
					<p className='text-center text-muted-foreground tracking-wide text-balance'>
						It might have been moved, deleted, or you may have mistyped the URL.
					</p>
					<div className='flex justify-center mt-6 items-center gap-x-4'>
						<Button asChild>
							<Link href='/'>
								<Icon.Home className='size-4 inline-block mr-2' />
								Go Home
							</Link>
						</Button>
						<Button asChild variant='outline'>
							<Link href='/projects'>
								<Icon.LeftArrow className='size-4 inline-block mr-2' />
								View Projects
							</Link>
						</Button>
					</div>
				</div>
			</FadeIn>
		</div>
	);
}
