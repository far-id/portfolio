'use client'; // Error boundaries must be Client Components

import ErrorTemplate from '@/components/app/error-template';
import { useEffect } from 'react';

export default function ErrorPage({
	error,
	reset,
}: Readonly<{
	error: Error & { digest?: string };
	reset: () => void;
}>) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return <ErrorTemplate error={error} reset={reset} />;
}
