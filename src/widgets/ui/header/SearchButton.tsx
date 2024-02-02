'use client'

import { SearchModal } from '@/entities/ui/search-modal/SearchModal'
import { SearchIcon } from '@/images/SearchIcon'
import { Button, useDisclosure } from '@nextui-org/react'
import React from 'react'

export const SearchButton: React.FC = () => {
	const { isOpen, onOpenChange } = useDisclosure()

	return (
		<>
			<SearchModal isOpen={isOpen} onOpenChange={onOpenChange} />
			<Button
				variant='light'
				size='sm'
				startContent={<SearchIcon size={18} fill='#fff' />}
				onPress={onOpenChange}
			>
				ПОИСК
			</Button>
		</>
	)
}
