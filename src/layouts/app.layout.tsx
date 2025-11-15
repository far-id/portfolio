'use client';

import { motion, useDragControls } from 'framer-motion';
import { useRef } from 'react';
import { ThemeToggle } from '@/components/app/theme-toggle';
import Footer from '@/components/app/footer';
import LanguageToggle from '@/components/app/language-toggle';

export default function AppLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const constraintsRef = useRef<HTMLDivElement>(null);
	const controls = useDragControls();

	return (
		<motion.div
			ref={constraintsRef}
			style={constraints}
			className='flex items-center justify-center overflow-hidden min-h-screen min-w-screen'
		>
			<motion.div
				drag
				dragListener={false}
				dragControls={controls}
				dragElastic={0.2}
				dragConstraints={constraintsRef}
				className='h-[75dvh] w-[70dvw] z-50 flex relative flex-col justify-between bg-background text-foreground -mt-20 rounded-xl shadow-lg overflow-hidden'
				dragMomentum={false}
			>
				{/* draggable element */}
				<div
					onPointerDown={(e) => controls.start(e)}
					className='cursor-grab active:cursor-grabbing p-1 select-none border-b'
				>
					<div className='flex items-center justify-between px-4'>
						<div className='flex items-center gap-x-2'>
							<span className='size-3 rounded-full bg-red-500'></span>
							<span className='size-3 rounded-full bg-yellow-500'></span>
							<span className='size-3 rounded-full bg-green-500'></span>
						</div>
						<span>far-id</span>
						<div></div>
						<div className='flex items-center gap-x-4 absolute right-4'>
							<LanguageToggle />
							<ThemeToggle />
						</div>
					</div>
				</div>
				{children}
				<Footer />
			</motion.div>
		</motion.div>
	);
}

const constraints = {
	width: '100vw',
	height: '100vh',
	borderRadius: 10,
	backgroundColor: 'var(--hue-1-transparent)',
};
