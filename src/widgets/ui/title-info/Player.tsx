'use client'

import { playerT } from '@/types/TitleT'
import { Button, ButtonGroup, Spinner } from '@nextui-org/react'
import React from 'react'
import FilePlayer from 'react-player/file'

export const Player: React.FC<playerT> = ({ ...props }) => {
	const [episodes, setEpisodes] = React.useState<any>('1')
	const [hls, setHls] = React.useState<'hd' | 'fhd' | 'sd'>('hd')

	return (
		<>
			<ButtonGroup variant='flat' color='primary'>
				{['hd', 'fhd', 'sd'].map((r: any) => (
					<Button
						key={r}
						variant={r === hls ? 'solid' : 'flat'}
						onPress={() => setHls(r)}
					>
						{r}
					</Button>
				))}
			</ButtonGroup>

			<ButtonGroup variant='flat' color='primary'>
				{Object.keys(props?.list).map(e => (
					<Button
						key={e}
						onPress={() => setEpisodes(e)}
						variant={e === episodes ? 'solid' : 'flat'}
					>
						{e}
					</Button>
				))}
			</ButtonGroup>

			<FilePlayer
				className='aspect-video w-full rounded-large object-cover overflow-hidden'
				width='854'
				height='480'
				controls={true}
				fallback={<Spinner color='warning' label='Загрузка...' />}
				onPause={() => {}}
				onPlay={() => {}}
				light={`https://static-libria.weekstorm.one/${
					props?.list[episodes ?? '1'].preview ?? ''
				}`}
				url={`https://${props?.host}${
					props?.list[episodes ?? '1']?.hls?.[hls ?? 'sd']
				}`}
			/>
		</>
	)
}
