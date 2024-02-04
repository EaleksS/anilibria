import { fToNow } from '@/libs/utils/formatTime'
import { TitleT } from '@/types'
import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Image,
	Link,
	Skeleton,
} from '@nextui-org/react'
import React from 'react'

export const PostCardVerticalLoading = () => {
	return (
		<Card
			shadow='sm'
			className=' relative'
			onPress={() => console.log('item pressed')}
			fullWidth
		>
			<CardBody className='p-0'>
				<Skeleton className='w-full h-[300px] rounded-lg'>
					<div className='w-full h-3 rounded-lg bg-default-300'></div>
				</Skeleton>
			</CardBody>
			<CardFooter className='flex flex-col gap-3'>
				<Skeleton className='w-full h-[15px] rounded-lg'>
					<div className='w-full h-3 rounded-lg bg-default-300'></div>
				</Skeleton>
				<Skeleton className='w-full h-[15px] rounded-lg'>
					<div className='w-full h-3 rounded-lg bg-default-300'></div>
				</Skeleton>
			</CardFooter>
		</Card>
	)
}

interface PostCardVerticalProps extends TitleT {
	index?: number
}

export const PostCardVertical: React.FC<PostCardVerticalProps> = ({
	...props
}) => {
	return (
		<Card
			shadow='sm'
			as={Link}
			href={`/title/${props.id}-${props.code}`}
			isPressable
			className=' relative'
			onPress={() => console.log('item pressed')}
			fullWidth
		>
			<CardBody className='grid grid-cols-[140px_1fr] gap-3'>
				<Image
					shadow='sm'
					radius='lg'
					alt='manga'
					className='w-full object-cover h-[100px] z-0 sm:h-[200px]'
					width='100%'
					src={`${process.env.NEXT_PUBLIC_IMG_URL}/${
						props?.posters?.medium.url ?? '-'
					}`}
				/>
				<div className='flex flex-col justify-center'>
					<h1 className='text-xl font-semibold'>{props?.names?.ru}</h1>
					<p className='text-base text-white/80'>
						{props?.player?.episodes?.last} серия добавлена
					</p>
					<p className='text-tiny text-white/60 font-light'>
						{fToNow(new Date(props?.last_change * 1000))}
					</p>
				</div>
			</CardBody>
			<CardHeader className=' absolute top-3 right-3 h-8 w-8 rounded-full bg-white/5 flex items-center justify-center'>
				{(props?.index ?? 0) + 1}
			</CardHeader>
		</Card>
	)
}
