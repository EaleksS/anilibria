'use client'

import { Button, ButtonGroup } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function NotFound() {
	const router = useRouter()

	return (
		<div className='flex h-screen w-screen flex-col items-center justify-center gap-y-10'>
			<h1 className='text-9xl text-secondary-400 opacity-50'>404</h1>

			<h2 className='text-3xl'>Страница не найдена</h2>
			<p className='opacity-80'>
				Не правильно набран адрес или такой страницы не существует
			</p>
			<div className='space-x-5'>
				<ButtonGroup>
					<Button
						onClick={() => router.back()}
						color='secondary'
						variant='bordered'
						className='uppercase'
					>
						Вернуться назад
					</Button>
					<Button
						href='/admin'
						as={Link}
						color='secondary'
						variant='solid'
						className='uppercase'
					>
						В главную
					</Button>
				</ButtonGroup>
			</div>
		</div>
	)
}
