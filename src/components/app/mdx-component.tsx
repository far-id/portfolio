import FadeIn from '@/components/app/fade-in';
import { cn } from '@/lib/utils';

export function MDXComponent({ children }: { readonly children: React.ReactNode }) {
	return (
		<FadeIn>
			<article
				className={cn(
					'prose min-w-full p-2.5 prose-pre:my-0  prose-pre:p-0 prose-pre:focus-visible:ring-0 prose-pre:outline-0 prose-img:aspect-video prose-img:object-cover prose-img:object-center',
					'text-sm'
				)}
			>
				{children}
			</article>
		</FadeIn>
	);
}
