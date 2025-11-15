import { Icon } from './icon';

export default function LoadingTemplate({ size = 'md' }: Readonly<{ size?: 'sm' | 'md' | 'lg' }>) {
	const sizeClasses = {
		sm: 'size-6',
		md: 'size-10',
		lg: 'size-12',
	};
	return (
		<div className='flex justify-center items-center w-full h-full'>
			<Icon.Loading className={`animate-spin ${sizeClasses[size]} mx-auto my-20 text-gray-500`} />
		</div>
	);
}
