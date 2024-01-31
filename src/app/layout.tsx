import { Header } from '@/widgets/ui/header/header'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Providers } from './provider'

import { Footer } from '@/widgets/ui/footer/Footer'
import clsx from 'clsx'
import './globals.css'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '400', '300', '500', '700', '900'],
})

export const metadata: Metadata = {
	title: 'Remanga',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru' className='dark bg-dark'>
			<body className={clsx(roboto.className, 'min-h-[100dvh]')}>
				<Providers>
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
