import { Button, ButtonGroup, Card, CardBody, Image } from '@nextui-org/react'
import React from 'react'

interface Props {
	title?: string
	description?: string
	img?: string
}

export const BannerCard: React.FC<Props> = ({ ...props }) => {
	return (
		<Card>
			<CardBody className='p-0 m-0'>
				<div className='flex justify-between h-full'>
					<div className='p-[30px_0_0_30px] h-full flex flex-col gap-3 items-start'>
						<h1 className='text-lg'>{props.title}</h1>
						<p className='text-base text-white/60 font-light'>
							{props.description}
						</p>

						<ButtonGroup
							radius='full'
							variant='solid'
							color='primary'
							size='sm'
						>
							<Button>Смотреть</Button>
							<Button variant='flat'>Добавить в избранные</Button>
						</ButtonGroup>
					</div>
					<div className='h-full flex items-end'>
						<Image width={300} alt='NextUI hero Image' src={props.img ?? ''} />
					</div>
				</div>
			</CardBody>
		</Card>
	)
}
