'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
	children: ReactNode;
	duration?: number;
	delay?: number;
	y?: number; // Vertical offset for the fade-in effect
}

export default function FadeIn({ children, duration = 0.6, delay = 0, y = 20 }: FadeInProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration, delay, ease: 'easeOut' }}
			viewport={{ once: true }}
		>
			{children}
		</motion.div>
	);
}
