import { ProjectItem } from '@/components/app/project-item';
import { Separator } from '@/components/ui/separator';
import { projects } from '@/data/projects';
export default function Projects() {
	return (
		<div>
			<div className='m-8'>
				<h1 className='text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50'>
					<span className='text-muted-foreground'>~/</span> Projects
				</h1>
			</div>
			<Separator />
			<div className='m-8'>
				<div className='grid grid-cols-3 gap-4'>
					{projects.map((project) => (
						<ProjectItem key={project.title} {...project} />
					))}
				</div>
			</div>
		</div>
	);
}
