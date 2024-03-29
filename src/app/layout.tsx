import { Header } from '@/widgets/ui/header/header'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Providers } from './provider'

import clsx from 'clsx'
import { cookies } from 'next/headers'
import './globals.css'

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['100', '400', '300', '500', '700', '900'],
})

export const metadata: Metadata = {
	title: 'API ANILIBRIA',
	description: 'ANILIBRIA STREAMING',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const cookieStore = cookies()
	const session = cookieStore.get('session')?.value ?? ''

	return (
		<html lang='ru' className='dark bg-dark'>
			<body className={clsx(roboto.className, 'min-h-[100dvh]')}>
				<Providers>
					<Header session={session} />
					{children}
					{/* <Footer /> */}
				</Providers>
			</body>
		</html>
	)
}
