'use client'

import { useRandomTitleQuery } from '@/libs/hook/query/useRandomTitleQuery'

import { Button, ButtonGroup, Image, Link, Skeleton } from '@nextui-org/react'
import clsx from 'clsx'
import React from 'react'

const LoadingJSX = () => {
	return (
		<>
			<div className='flex gap-3 items-center'>
				<Skeleton className='w-[200px] h-[30px] rounded-lg'>
					<div className='w-full h-3 rounded-lg bg-default-300'></div>
				</Skeleton>
				<Skeleton className='w-[120px] h-[20px] rounded-lg'>
					<div className='w-full h-3 rounded-lg bg-default-300'></div>
				</Skeleton>
			</div>
			<Skeleton className='w-full h-[100px] rounded-lg'>
				<div className='w-full h-3 rounded-lg bg-default-300'></div>
			</Skeleton>
			<div className='flex gap-3'>
				{[1, 2, 3, 4].map(e => (
					<Skeleton className='w-[100px] h-[20px] rounded-lg'>
						<div className='w-full h-3 rounded-lg bg-default-300'></div>
					</Skeleton>
				))}
			</div>
		</>
	)
}

export const MainTitle: React.FC = () => {
	const query = useRandomTitleQuery()

	return (
		<div
			className={clsx(
				'grid grid-cols-[205px_1fr] gap-10 my-3 h-[600px] items-center overflow-hidden',
				` before:bg-cover before:bg-center before:bg-no-repeat before:brightness-50 before:blur-lg before:absolute before:left-0 before:right-0 before:top-[-1rem] before:z-[-1] before:h-[calc(500px_+_120px_+_1rem)] before:bg-[url('/gif/giphy2.gif')]`
			)}
		>
			<div
				className={clsx(
					' absolute top-0 right-0 left-0 h-[calc(700px)] z-0',
					'bg-center bg-no-repeat bg-cover brightness-[.3] blur-lg'
				)}
				style={{
					backgroundImage: `url('${process.env.NEXT_PUBLIC_IMG_URL}/${
						query.data?.posters?.small.url ?? ''
					}')`,
				}}
			></div>
			<Image
				shadow='sm'
				radius='lg'
				alt='manga'
				className='w-full object-cover h-[200px] z-0 sm:h-[300px]'
				width='100%'
				src={`${process.env.NEXT_PUBLIC_IMG_URL}/${
					query.data?.posters?.small.url ?? ''
				}`}
			/>
			<div className='flex flex-col gap-3 items-start relative z-10'>
				<strong className=' underline'>Рандомный тайтл</strong>
				{query.isLoading ? (
					LoadingJSX()
				) : (
					<>
						<h1 className='text-2xl font-semibold'>
							{query.data?.names?.ru}{' '}
							<strong className=' text-white/60 text-base'>
								{query.data?.names?.en}
							</strong>
						</h1>
						<p className='text-small'>
							{String(query?.data?.description ?? '-')}
						</p>
						<ButtonGroup radius='full' variant='solid' color='primary'>
							<Button as={Link} href={`/title/${query?.data?.code}`}>
								Смотреть
							</Button>
							<Button variant='flat'>Добавить в избранные</Button>
						</ButtonGroup>
						<ul className='flex gap-3'>
							<li>
								<span className='text-white/60'>Статус:</span>{' '}
								{query.data?.status?.string ?? '-'}
							</li>
							<li>
								<span className='text-white/60'>Год:</span>{' '}
								{query.data?.season?.year ?? '-'}
							</li>
							<li>
								<span className='text-white/60'>Серий: </span>
								{query.data?.player?.episodes?.last ?? '-'}
							</li>
							<li>
								<span className='text-white/60'>Теги: </span>
								{query.data?.genres?.join(', ') ?? '-'}
							</li>
						</ul>
					</>
				)}
			</div>
		</div>
	)
}
