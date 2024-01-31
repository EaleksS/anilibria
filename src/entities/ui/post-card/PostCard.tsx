import { TitleT } from '@/types'
import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Image,
	Link,
} from '@nextui-org/react'
import React from 'react'

export const PostCard: React.FC<TitleT> = ({ ...props }) => {
	return (
		<Card
			shadow='sm'
			as={Link}
			href={`/title/${props.code}`}
			isPressable
			className=' relative'
			onPress={() => console.log('item pressed')}
			fullWidth
		>
			<CardHeader className=' overflow-hidden py-1 absolute rounded-large top-1 shadow-small left-1 z-10 w-max bg-gray-700'>
				<p className='text-tiny'>{props?.status?.string ?? '-'}</p>
			</CardHeader>
			<CardHeader className=' overflow-hidden py-1 absolute rounded-large top-1 shadow-small right-1 z-10 w-max bg-gray-700'>
				<p className='text-tiny'>{props?.season?.year ?? '-'}</p>
			</CardHeader>
			<CardBody className='p-0'>
				<Image
					shadow='sm'
					radius='lg'
					alt='manga'
					className='w-full object-cover h-[200px] z-0 sm:h-[300px]'
					width='100%'
					src={`https://static-libria.weekstorm.one/${
						props?.posters?.medium.url ?? '-'
					}`}
				/>
			</CardBody>
			<CardFooter className='block'>
				<h2 className='text-small whitespace-nowrap truncate'>
					{props?.names.ru}
				</h2>
				<h3 className='text-tiny text-white/60'>
					{props?.type?.full_string ?? '-'}
				</h3>
			</CardFooter>
		</Card>
	)
}
