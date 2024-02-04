'use client' // Error components must be Client Components

import { Button, ButtonGroup, Link } from '@nextui-org/react'
import { usePathname, useRouter } from 'next/navigation'

interface Props {
	error: Error & { digest?: string }
	reset: () => void
}

export default function Error({ error, reset }: Props) {
	const router = useRouter()
	const pathname = usePathname()

	return (
		<div className='fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-center justify-center gap-3'>
			<h2 className='text-3xl text-primary-400 opacity-70'>
				Упс, что-то пошло не так
			</h2>
			<p className='opacity-70'>
				{error.message.includes('404')
					? 'Не правильно набран адрес или такой страницы не существует'
					: error.message}
			</p>
			<ButtonGroup>
				<Button
					variant='bordered'
					color='primary'
					onClick={() => router.back()}
				>
					Назад
				</Button>
				<Button variant='solid' color='primary' as={Link} href='/'>
					Главная страница
				</Button>
			</ButtonGroup>
		</div>
	)
}
