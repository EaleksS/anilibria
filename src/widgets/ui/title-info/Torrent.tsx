import { fDateTime } from '@/libs/utils/formatTime'
import { torrentsT } from '@/types/TitleT'
import {
	Button,
	ButtonGroup,
	Link,
	Spinner,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from '@nextui-org/react'
import React from 'react'
import { FaMagnet } from 'react-icons/fa'
import {
	IoArrowDownOutline,
	IoArrowUpOutline,
	IoCheckmarkSharp,
} from 'react-icons/io5'
import { MdDownload } from 'react-icons/md'

const columns = [
	{
		key: 'id',
		label: 'ID',
	},
	{
		key: 'episodes',
		label: 'Серии',
	},
	{
		key: 'quality',
		label: 'Качество',
	},
	{
		key: 'size',
		label: 'Размер',
	},
	{
		key: 'update',
		label: 'Обновление',
	},
	{
		key: 'download',
		label: 'Скачать',
	},
	{
		key: 'up',
		label: 'наверх',
	},
	{
		key: 'down',
		label: 'вниз',
	},
	{
		key: 'success',
		label: 'скачали',
	},
]

interface TorrentProps {
	torrents?: torrentsT
	isLoading?: boolean
}

export const Torrent: React.FC<TorrentProps> = ({ ...props }) => {
	return (
		<Table aria-label='Example table with dynamic content'>
			<TableHeader columns={columns}>
				{column => {
					if (column.key === 'up')
						return (
							<TableColumn key={column.key}>
								<IoArrowUpOutline className='text-success' size={16} />
							</TableColumn>
						)

					if (column.key === 'down')
						return (
							<TableColumn key={column.key}>
								<IoArrowDownOutline className='text-danger' size={16} />
							</TableColumn>
						)

					if (column.key === 'success')
						return (
							<TableColumn key={column.key}>
								<IoCheckmarkSharp className='text-success' size={16} />
							</TableColumn>
						)

					return <TableColumn key={column.key}>{column.label}</TableColumn>
				}}
			</TableHeader>
			<TableBody
				items={props?.torrents?.list ?? []}
				isLoading={props?.isLoading}
				loadingContent={<Spinner />}
			>
				{item => (
					<TableRow key={item?.torrent_id}>
						<TableCell>{item?.torrent_id}</TableCell>
						<TableCell>{item?.episodes.string}</TableCell>
						<TableCell>{item?.quality.string}</TableCell>
						<TableCell>{item?.size_string}</TableCell>
						<TableCell>{fDateTime(item?.uploaded_timestamp * 1000)}</TableCell>
						<TableCell>
							<ButtonGroup variant='flat' color='primary'>
								<Button
									as={Link}
									href={`https://tv3.darklibria.it/upload/torrents/${item?.torrent_id}.torrent`}
									isIconOnly
									variant='solid'
								>
									<MdDownload size={18} />
								</Button>
								<Button as={Link} href={item?.magnet} isIconOnly>
									<FaMagnet />
								</Button>
							</ButtonGroup>
						</TableCell>
						<TableCell className='text-success'>{item?.seeders}</TableCell>
						<TableCell className='text-danger'>{item?.leechers}</TableCell>
						<TableCell className='text-success'>{item?.downloads}</TableCell>
					</TableRow>
				)}
			</TableBody>
		</Table>
	)
}
