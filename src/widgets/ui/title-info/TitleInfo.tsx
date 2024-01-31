'use client'

import { useTitleQuery } from '@/libs/hook/query/useTitlleQuery'
import { Button, Image } from '@nextui-org/react'
import clsx from 'clsx'
import React from 'react'
import { MdBookmarks } from 'react-icons/md'
import { Player } from './Player'
import { TitleSlider } from './TitleSlider'

interface TitleInfoProps {
	code: string
}

export const TitleInfo: React.FC<TitleInfoProps> = ({ code }) => {
	const query = useTitleQuery(`?code=${code}`)

	return (
		<>
			<div
				className={clsx(
					'grid grid-cols-[350px_1fr] gap-10 my-3 overflow-hidden'
				)}
			>
				<div className='flex flex-col gap-y-3 '>
					<Image
						shadow='sm'
						radius='lg'
						alt='manga'
						className='w-full object-cover h-[500px] z-0 '
						width='100%'
						src={`https://static-libria.weekstorm.one/${
							query.data?.posters?.medium.url ?? ''
						}`}
					/>

					<div className=' flex gap-3 items-center ml-2'>
						<MdBookmarks size={22} className='text-white/60' />{' '}
						<strong className=' text-base font-light'>
							В избранных: {query?.data?.in_favorites}
						</strong>
					</div>

					<Button variant='solid' radius='full' color='primary'>
						Добавить в избранные
					</Button>
				</div>
				<div>
					<div className='flex flex-col gap-3 items-start relative z-10 p-3 bg-black/20 rounded-large h-max backdrop-blur-sm'>
						<h1 className='text-2xl font-semibold'>
							{query.data?.names?.ru} <br />
							<strong className=' text-white/60 text-base'>
								{query.data?.names?.en}
							</strong>
						</h1>
						<p className='text-small'>
							{String(query?.data?.description ?? '-')}
						</p>

						<ul className=''>
							<li>
								<span className='text-white/60'>Статус:</span>{' '}
								{query.data?.status.string ?? '-'}
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
					</div>
					<div className='p-3 bg-black/20 rounded-large h-max backdrop-blur-sm mt-3 flex flex-col gap-3 items-start'>
						<Player player={query.data?.player} />
					</div>
				</div>
			</div>
			<TitleSlider genres={query.data?.genres} id={query.data?.id} />
		</>
	)
}
