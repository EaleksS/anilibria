'use client'

import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownSection,
	DropdownTrigger,
	Image,
	Link,
} from '@nextui-org/react'
import React from 'react'

interface UiDropdownProps {
	session: string
}

export const UiDropdown: React.FC<UiDropdownProps> = ({ session }) => {
	// const query = useUserQuery(session)
	// const queryFavorite = useFavoriteQuery(session)
	return null

	// if (!session)
	// 	return (
	// 		<Button
	// 			variant='flat'
	// 			className='rounded-full overflow-hidden'
	// 			as={Link}
	// 			href='/auth'
	// 		>
	// 			Войти
	// 		</Button>
	// 	)

	// return (
	// 	<>
	// 		<Dropdown>
	// 			<DropdownTrigger>
	// 				<Button
	// 					variant='light'
	// 					isIconOnly
	// 					className='rounded-full overflow-hidden'
	// 				>
	// 					<Image
	// 						src={`${process.env.NEXT_PUBLIC_IMG_URL}${
	// 							query?.data?.avatar_original ?? query?.data?.avatar_thumbnail
	// 						}`}
	// 						width='100'
	// 						height='100'
	// 						alt='profile'
	// 					/>
	// 				</Button>
	// 			</DropdownTrigger>
	// 			<DropdownMenu
	// 				variant='faded'
	// 				aria-label='Dropdown menu with description'
	// 				closeOnSelect
	// 			>
	// 				<DropdownSection title={query?.data?.email ?? '-'} showDivider>
	// 					<DropdownItem key='profile' className='h-14 gap-2'>
	// 						<p className='font-semibold'>Вошёл как</p>
	// 						<p>{query?.data?.login ?? '-'}</p>
	// 					</DropdownItem>
	// 				</DropdownSection>
	// 				<DropdownSection title='Информация'>
	// 					<DropdownItem key='chatID' description='В избранных'>
	// 						<p className='font-semibold'>
	// 							#{queryFavorite.data?.pagination?.total_items}
	// 						</p>
	// 					</DropdownItem>
	// 				</DropdownSection>
	// 				<DropdownSection title='Действие'>
	// 					<DropdownItem
	// 						key='change-chatId1'
	// 						className='text-primary'
	// 						color='primary'
	// 						href='/favorite'
	// 					>
	// 						Перейти в избранные
	// 					</DropdownItem>
	// 					<DropdownItem
	// 						key='change-chatId2'
	// 						className='text-danger'
	// 						color='danger'
	// 						onPress={() => {
	// 							// localStorage.removeItem('session')
	// 						}}
	// 					>
	// 						Выйти из аккаунта
	// 					</DropdownItem>
	// 				</DropdownSection>
	// 			</DropdownMenu>
	// 		</Dropdown>
	// 	</>
	// )
}
