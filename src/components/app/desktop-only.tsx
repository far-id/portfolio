'use client';
import { useEffect, useState } from 'react';

// this component is for temporary use only before mobile version is ready
export const DesktopOnly = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkDevice = () => {
			setIsMobile(window.innerWidth < 1024);
		};

		checkDevice();

		window.addEventListener('resize', checkDevice);

		return () => window.removeEventListener('resize', checkDevice);
	}, []);

    if (isMobile) {
        return (
            <div className="flex flex-col items-center justify-center h-screen text-center">
                <h1 className="text-2xl font-bold mb-4">Mobile Version Coming Soon!</h1>
                <p className="text-lg">Please visit this site on a desktop for the best experience.</p>
            </div>
        );
    }

    return null;
};
