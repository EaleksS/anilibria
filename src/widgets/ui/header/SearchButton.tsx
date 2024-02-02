'use client'

import { SearchModal } from '@/entities/ui/search-modal/SearchModal'
import { SearchIcon } from '@/images/SearchIcon'
import { Button, useDisclosure } from '@nextui-org/react'
import React from 'react'

export const SearchButton: React.FC = () => {
	const { isOpen, onOpenChange } = useDisclosure()
	const [renderModal, setRenderModal] = React.useState<boolean>(false)

	return (
		<>
			{renderModal && (
				<SearchModal
					isOpen={isOpen}
					onOpenChange={onOpenChange}
					setRenderModal={setRenderModal}
				/>
			)}
			<Button
				variant='light'
				size='sm'
				startContent={<SearchIcon size={18} fill='#fff' />}
				onPress={() => {
					setRenderModal(true)
					onOpenChange()
				}}
			>
				ПОИСК
			</Button>
		</>
	)
}
