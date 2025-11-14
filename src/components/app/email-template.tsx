import { EmailType } from '@/types/email';
import {
	Body,
	Container,
	Head,
	Html,
	Preview,
	Section,
	Text,
	Heading,
	Hr,
	Tailwind,
} from '@react-email/components';

export default function EmailTemplate({ name, email, subject, message }: Readonly<EmailType>) {
	return (
		<Html>
			<Head />
			<Preview>Ada pesan baru dari halaman contact portfolio</Preview>

			<Tailwind>
				<Body className='py-10 font-sans'>
					<Container className='bg-white max-w-xl mx-auto p-8 rounded-xl shadow-lg'>
						<Heading className='text-2xl font-bold mb-2'>📩 New Contact Message</Heading>

						<Text className='text-gray-600 mb-6'>
							Seseorang mengisi form contact di portfolio kamu.
						</Text>

						<Section className='mb-4'>
							<div className='flex gap-x-2 items-center'>
								<Text className='font-semibold'>Nama:</Text>
								<Text className='text-gray-800'>{name}</Text>
							</div>

							<div className='flex gap-x-2 items-center'>
								<Text className='font-semibold mt-4'>Email:</Text>
								<Text className='text-gray-800'>{email}</Text>
							</div>

							<div className='flex gap-x-2 items-center'>
								<Text className='font-semibold mt-4'>Subjek:</Text>
								<Text className='text-gray-800'>{subject}</Text>
							</div>
						</Section>

						<Hr className='my-6 border-gray-200' />

						<Section>
							<Text className='font-semibold'>Pesan:</Text>

							{/* Message panjang, multi-line, dan wrap */}
							<Text className='text-gray-900 whitespace-pre-wrap leading-relaxed mt-2'>
								{message}
							</Text>
						</Section>

						<Hr className='my-6 border-gray-200' />

						<Text className='text-center text-xs text-gray-400'>
							Email ini dikirim otomatis dari halaman contact portfolio.
						</Text>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
