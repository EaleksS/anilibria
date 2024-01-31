import { getAnilibria } from '@/service/anilibria.service'
import { Metadata } from 'next'

async function getTitle(code: string) {
	try {
		return await getAnilibria
			.title(`?code=${code}`)
			.then(res => res)
			.catch((err: Error) => {
				throw new Error(err.message)
			})
	} catch (error) {
		console.error(error)

		return null
	}
}

interface generateMetadataProps {
	params: { code: string }
}

export async function generateMetadata({
	params: { code },
}: generateMetadataProps) {
	const data = await getTitle(code)

	const metadata: Metadata = {
		title: data?.names?.ru ?? code,
		description: String(data?.description ?? code),
		openGraph: {
			images: [
				'https://static-libria.weekstorm.one/' + data?.posters.small.url,
				'https://static-libria.weekstorm.one/' + data?.posters.medium.url,
				'https://static-libria.weekstorm.one/' + data?.posters.original.url,
			],
			description: String(data?.description ?? code),
			title: data?.names?.ru ?? code,
			type: 'website',
			url: `/title/${code}`,
		},

		icons: {
			icon: [
				{
					media: '(prefers-color-scheme: light)',
					url: 'https://static-libria.weekstorm.one/' + data?.posters.small.url,
					href:
						'https://static-libria.weekstorm.one/' + data?.posters.small.url,
				},
				{
					media: '(prefers-color-scheme: dark)',
					url: 'https://static-libria.weekstorm.one/' + data?.posters.small.url,
					href:
						'https://static-libria.weekstorm.one/' + data?.posters.small.url,
				},
			],
		},
	}

	return metadata
}

interface LayoutProps {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return <main className='max-w-7xl mx-auto'>{children}</main>
}

export default Layout
