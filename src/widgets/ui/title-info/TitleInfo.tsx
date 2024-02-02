'use client'

import { useTitleQuery } from '@/libs/hook/query/useTitlleQuery'
import { Button, Image, Skeleton, Spinner } from '@nextui-org/react'
import clsx from 'clsx'
import React from 'react'
import { MdBookmarks } from 'react-icons/md'
import { Player } from './Player'
import { TitleSlider } from './TitleSlider'
import { Torrent } from './Torrent'

interface TitleInfoProps {
	code: string
}

const LoadingJSX = () => {
	return (
		<>
			<Skeleton className='w-[400px] h-[30px] rounded-lg'>
				<div className='w-full h-3 rounded-lg bg-default-300'></div>
			</Skeleton>
			<Skeleton className='w-[300px] h-[30px] rounded-lg'>
				<div className='w-full h-3 rounded-lg bg-default-300'></div>
			</Skeleton>
			<Skeleton className='w-full h-[200px] rounded-lg'>
				<div className='w-full h-3 rounded-lg bg-default-300'></div>
			</Skeleton>
			<div className='w-[250px] flex gap-3 flex-col'>
				{[1, 2, 3, 4, 5, 6].map(e => (
					<Skeleton className='w-full h-[15px] rounded-lg' key={e}>
						<div className='w-full h-3 rounded-lg bg-default-300'></div>
					</Skeleton>
				))}
			</div>
		</>
	)
}

export const TitleInfo: React.FC<TitleInfoProps> = ({ code }) => {
	const query = useTitleQuery(`?code=${code}`)

	return (
		<>
			<div
				className={clsx(
					'grid lg:grid-cols-[350px_1fr] gap-10 my-3 overflow-hidden'
				)}
			>
				<div className='flex flex-col gap-y-3 justify-center items-center lg:justify-start '>
					<Image
						shadow='sm'
						radius='lg'
						alt='manga'
						className='lg:w-full object-cover h-[200px] w-[130px] lg:h-[500px] z-0 '
						width='100%'
						src={`${process.env.NEXT_PUBLIC_IMG_URL}${
							query.data?.posters?.medium.url ?? ''
						}`}
					/>

					<div className=' flex gap-3 items-center'>
						<MdBookmarks size={22} className='text-white/60' />{' '}
						<strong className=' text-base font-light flex items-center'>
							В избранных:{' '}
							{query.isLoading ? (
								<Spinner size='sm' className='ml-3' />
							) : (
								query?.data?.in_favorites
							)}
						</strong>
					</div>

					<Button variant='solid' radius='full' color='primary'>
						Добавить в избранные
					</Button>
				</div>
				<div>
					<div className='flex flex-col gap-3 items-start relative z-10 p-3 bg-black/20 rounded-large h-max backdrop-blur-sm'>
						{query.isLoading ? (
							LoadingJSX()
						) : (
							<>
								<h1 className='text-2xl font-semibold'>
									{query.data?.names?.ru} <br />
									<strong className=' text-white/60 text-base'>
										{query.data?.names?.en}
									</strong>
								</h1>
								<p className='text-small'>
									{String(query?.data?.description ?? '-')}
								</p>

								<ul>
									<li>
										<span className='text-white/60'>Тип:</span>{' '}
										{query.data?.type?.string ?? '-'}
									</li>
									<li>
										<span className='text-white/60'>Длительность эпизода:</span>{' '}
										{query.data?.type?.length
											? query.data?.type?.length + ' мин.'
											: '-'}
									</li>
									<li>
										<span className='text-white/60'>Статус:</span>{' '}
										{query.data?.status?.string ?? '-'}
									</li>
									<li>
										<span className='text-white/60'>Год:</span>{' '}
										{query.data?.season?.year ?? '-'}
									</li>
									<li>
										<span className='text-white/60'>Сезон:</span>{' '}
										{query.data?.season?.string ?? '-'}
									</li>
									<li>
										<span className='text-white/60'>Серий: </span>
										{query.data?.player?.episodes?.last ?? '-'}
									</li>
									<li>
										<span className='text-white/60'>Жанры: </span>
										{query.data?.genres?.join(', ') ?? '-'}
									</li>
									<li>
										<span className='text-white/60'>Озвучка: </span>
										{query.data?.team?.voice?.join(', ') ?? '-'}
									</li>
								</ul>
							</>
						)}
					</div>
					<div className='p-3 bg-black/20 rounded-large h-max backdrop-blur-sm mt-3 flex flex-col gap-3 items-start'>
						<Player player={query.data?.player} isLoading={query.isLoading} />
					</div>
				</div>
			</div>
			<Torrent torrents={query.data?.torrents} isLoading={query.isLoading} />
			<TitleSlider genres={query.data?.genres} id={query.data?.id} />
		</>
	)
}
