import React from 'react';

export default async function Projects() {
	await new Promise((resolve) => setTimeout(resolve, 2000));
	return <div>Project</div>;
}
