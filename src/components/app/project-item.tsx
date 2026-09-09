import { Card } from '@/components/ui/card';
import { Icon } from './icon';
import Link from 'next/link';
import { ProjectType } from '@/data/projects';
export const ProjectItem = ({
	title,
	description,
	techStack,
	demoLink,
	sourceLink,
	status,
}: ProjectType) => {
	return (
		<Card className='group bg-background hover:border-foreground/40 rounded-lg p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:shadow-black/60 relative overflow-hidden'>
			<div>
				<h3 className='text-base font-bold group-hover:scale-101 transition-transform flex items-center justify-between'>
					<span>{title}</span>
					{status && (
						<span
							className={`text-[10px] px-2 py-0.5 rounded ${
								status === 'completed' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-white'
							}`}
						>
							{status === 'completed' ? 'Completed' : 'In Progress'}
						</span>
					)}
				</h3>
				<p className='text-xs leading-relaxed mt-2.5'>{description}</p>
			</div>
			<div className='mt-5 pt-3 border-t'>
				<div className='flex flex-wrap gap-1.5 mb-3.5'>
					{techStack.map((tech) => (
						<TechStack key={tech} text={tech} />
					))}
				</div>
				<div className='flex items-center justify-between text-xs pt-1'>
					{demoLink ? (
						<Link
							className='inline-flex text-foreground hover:text-primary items-center gap-1.5 transition-colors font-medium'
							href={demoLink}
							target='_blank'
							title='View Live Demo'
						>
							Live Demo <Icon.ExternalLink className='size-3.5' />
						</Link>
					) : (
						<div></div>
					)}
					{sourceLink && (
						<Link
							className='inline-flex text-foreground hover:text-primary items-center gap-1 transition-colors'
							href={sourceLink}
							target='_blank'
							title='View Source'
						>
							<Icon.Github className='size-4 stroke-gray-600 dark:stroke-gray-400' />
							<span className='text-xs'>Source</span>
						</Link>
					)}
				</div>
			</div>
		</Card>
	);
};

const TechStack = ({ text }: { text: string }) => {
	return <span className='text-[10px] px-2 py-0.5 rounded border'>{text}</span>;
};
