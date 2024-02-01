'use client'

import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownSection,
	DropdownTrigger,
	Image,
} from '@nextui-org/react'

export const UiDropdown: React.FC = () => {
	return (
		<>
			<Dropdown>
				<DropdownTrigger>
					<Button
						variant='light'
						isIconOnly
						className='rounded-full overflow-hidden'
					>
						<Image
							src='https://remanga.org/media/users/64148/avatar_3HsytPG.jpg'
							width='100'
							height='100'
						/>
					</Button>
				</DropdownTrigger>
				<DropdownMenu
					variant='faded'
					aria-label='Dropdown menu with description'
					closeOnSelect
				>
					<DropdownSection title={'ADMIN'} showDivider>
						<DropdownItem key='profile' className='h-14 gap-2'>
							<p className='font-semibold'>Вошёл как</p>
							<p>{'Эрнест'}</p>
						</DropdownItem>
					</DropdownSection>
					<DropdownSection title='Информация'>
						<DropdownItem key='chatID' description='В избранных'>
							<p className='font-semibold'>#1020123</p>
						</DropdownItem>
					</DropdownSection>
					<DropdownSection title='Действие'>
						<DropdownItem
							key='change-chatId'
							className='text-primary'
							color='primary'
							href='/user/favorite'
						>
							Перейти в избранные
						</DropdownItem>
					</DropdownSection>
				</DropdownMenu>
			</Dropdown>
		</>
	)
}
