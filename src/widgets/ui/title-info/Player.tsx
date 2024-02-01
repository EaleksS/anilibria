'use client'

import { playerT } from '@/types/TitleT'
import { Select, SelectItem, Spinner } from '@nextui-org/react'
import { Key } from '@react-types/shared'
import React from 'react'
import FilePlayer from 'react-player/file'

interface PlayerProps {
	player?: playerT
	isLoading?: boolean
}

interface IEpisodesData {
	label: string
	value: string
}

const hlsData = [
	{ label: 'FHD', value: 'fhd' },
	{ label: 'HD', value: 'hd' },
	{ label: 'SD', value: 'sd' },
]

export const Player: React.FC<PlayerProps> = ({ ...props }) => {
	const [episodes, setEpisodes] = React.useState<any>('1')
	const [hls, setHls] = React.useState<'hd' | 'fhd' | 'sd'>('fhd')

	const [value, setValue] = React.useState<Iterable<Key>>(new Set(['1']))
	const [valuehls, setValuehls] = React.useState<Iterable<Key>>(
		new Set(['fhd'])
	)

	const episodesData: IEpisodesData[] = Object.keys(
		props?.player?.list ?? ''
	).map(e => {
		return { value: e, label: e + ' серия' }
	})
	if (props.isLoading) return <Spinner />

	if (!props.player?.episodes.last) return 'К сожалению серий нету'

	return (
		<>
			<div className='flex gap-3 w-[500px]'>
				<Select
					label='Серия'
					variant='bordered'
					selectedKeys={value}
					onSelectionChange={e => {
						if (typeof Array.from(e)[0] === 'undefined') return
						setEpisodes(Array.from(e)[0] ?? '1')
						setValue(e)
					}}
					required
					isRequired
					size='sm'
				>
					{episodesData.map(episode => (
						<SelectItem key={episode.value} value={episode.value}>
							{episode.label}
						</SelectItem>
					))}
				</Select>
				<Select
					label='Качество видео'
					variant='bordered'
					selectedKeys={valuehls}
					className='w-[200px]'
					size='sm'
					onSelectionChange={e => {
						if (typeof Array.from(e)[0] === 'undefined') return

						const hlsD =
							Array.from(e)[0] === 'hd'
								? 'hd'
								: Array.from(e)[0] === 'sd'
								? 'sd'
								: Array.from(e)[0] === 'fhd'
								? 'fhd'
								: 'hd'

						setHls(hlsD)
						setValuehls(e)
					}}
					required
					isRequired
				>
					{hlsData.map(episode => (
						<SelectItem key={episode.value} value={episode.value}>
							{episode.label}
						</SelectItem>
					))}
				</Select>
			</div>

			<FilePlayer
				className='aspect-video w-full rounded-large object-cover overflow-hidden'
				width='854'
				height='480'
				controls={true}
				fallback={
					<Spinner className=' absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center' />
				}
				onPause={() => {}}
				onPlay={() => {}}
				light={`${process.env.NEXT_PUBLIC_IMG_URL}/${
					props?.player?.list[episodes ?? '1'].preview ?? ''
				}`}
				url={`https://${props?.player?.host}${
					props?.player?.list[episodes ?? '1']?.hls?.[hls ?? 'sd']
				}`}
			/>
		</>
	)
}
