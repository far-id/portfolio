import React from 'react';
import { Button } from '@/components/ui/button';

export default function ErrorTemplate({
	error,
	reset,
}: Readonly<{ error: Error & { digest?: string }; reset: () => void }>) {
	return (
		<div className='h-full flex items-center justify-center flex-col p-4'>
			<h1 className='text-2xl font-bold mb-4'>Something went wrong!</h1>
			<p className='text-center text-muted-foreground tracking-wide text-balance'>
				Unexpected error occurred.
			</p>
			<p className='text-center text-muted-foreground tracking-wide text-balance'>
				Please try again or go back to the previous page.
			</p>
			<div className='flex items-center justify-center mt-6 gap-x-4'>
				<Button
					className='cursor-pointer'
					onClick={
						// Attempt to recover by trying to re-render the segment
						() => reset()
					}
				>
					Try again
				</Button>
				<Button
					variant='outline'
					className='cursor-pointer'
					onClick={
						// Go back to the previous page
						() => globalThis.history.back()
					}
				>
					Go Back
				</Button>
			</div>
			{error.digest && (
				<p className='text-center text-xs mt-4 text-muted-foreground tracking-wide text-balance'>
					Error ID: {error.digest}
				</p>
			)}
		</div>
	);
}
