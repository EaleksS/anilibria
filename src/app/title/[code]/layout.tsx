import { getShikamori } from '@/service/shikamori.service'
import { Metadata } from 'next'
import React from 'react'
import { getID } from './getID'

async function getTitle(code: string) {
	try {
		const data = await getID(code)

		return await getShikamori
			.animesID(Number(data ?? 0))
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
		title: data?.russian ?? data?.name ?? code,
		description: String(data?.description ?? code),
		openGraph: {
			images: [
				`${process.env.NEXT_PUBLIC_BASE_SHIKAMORI_URL}/` +
					data?.image?.original,
			],
			description: String(data?.description ?? code),
			title: data?.russian ?? data?.name ?? code,
			type: 'website',
			url: `/title/${code}`,
		},

		icons: {
			icon: [
				{
					media: '(prefers-color-scheme: light)',
					url:
						`${process.env.NEXT_PUBLIC_BASE_SHIKAMORI_URL}/` +
						data?.image?.original,
					href:
						`${process.env.NEXT_PUBLIC_BASE_SHIKAMORI_URL}/` +
						data?.image?.original,
				},
				{
					media: '(prefers-color-scheme: dark)',
					url:
						`${process.env.NEXT_PUBLIC_BASE_SHIKAMORI_URL}/` +
						data?.image?.original,
					href:
						`${process.env.NEXT_PUBLIC_BASE_SHIKAMORI_URL}/` +
						data?.image?.original,
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
