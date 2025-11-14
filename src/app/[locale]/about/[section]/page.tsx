import { MDXComponent } from '@/components/app/mdx-component';
import { NAVIGATION } from '@/constants/navigation';
import React from 'react';

export default async function page({ params }: Readonly<{ params: Promise<{ section: string }> }>) {
	const { section } = await params;
	const post = NAVIGATION.find((nav) => nav.label === 'About')?.children?.find((child) =>
		child.path.endsWith(`/${section}`)
	);
	return (
		<MDXComponent>
			{post?.mdx_component ? React.createElement(post.mdx_component) : <div>Section not found</div>}
		</MDXComponent>
	);
}
