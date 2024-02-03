import { getAnilibria } from '@/service/anilibria.service'
import { Metadata } from 'next'
import React from 'react'

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
				`${process.env.NEXT_PUBLIC_IMG_URL}/` + data?.posters.small.url,
				`${process.env.NEXT_PUBLIC_IMG_URL}/` + data?.posters.medium.url,
				`${process.env.NEXT_PUBLIC_IMG_URL}/` + data?.posters.original.url,
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
					url: `${process.env.NEXT_PUBLIC_IMG_URL}/` + data?.posters.small.url,
					href: `${process.env.NEXT_PUBLIC_IMG_URL}/` + data?.posters.small.url,
				},
				{
					media: '(prefers-color-scheme: dark)',
					url: `${process.env.NEXT_PUBLIC_IMG_URL}/` + data?.posters.small.url,
					href: `${process.env.NEXT_PUBLIC_IMG_URL}/` + data?.posters.small.url,
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
