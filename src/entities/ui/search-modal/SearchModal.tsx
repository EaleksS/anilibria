import { SearchIcon } from '@/images/SearchIcon'
import { useMangaQuery } from '@/libs/hook/query/useMangaQuery'
import {
	Button,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
} from '@nextui-org/react'
import { useIsFetching } from '@tanstack/react-query'
import React from 'react'
import { PostCard, PostCardLoading } from '../post-card/PostCard'

interface SearchModalProps {
	isOpen: boolean
	onOpenChange: () => void
	setRenderModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const SearchModal: React.FC<SearchModalProps> = ({
	isOpen,
	onOpenChange,
	setRenderModal,
}) => {
	const [filter, setFilter] = React.useState<string>('')
	const deferredText = React.useDeferredValue(filter)

	const countFetching = useIsFetching({
		queryKey: [`?search=${deferredText}&limit=20&items_per_page=20`],
	})

	const query = useMangaQuery(
		`?search=${deferredText}&limit=20&items_per_page=20`
	)

	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={onOpenChange}
			scrollBehavior='outside'
			size='5xl'
			onClose={() => {
				setTimeout(() => {
					setRenderModal(false)
				}, 300)
			}}
		>
			<ModalContent>
				{onClose => (
					<>
						<ModalHeader className='flex flex-col gap-1'>
							<Input
								placeholder='Поднятие уровня в одиночку...'
								label='Поиск'
								className='mt-6'
								onValueChange={setFilter}
								value={filter}
								isClearable
								startContent={<SearchIcon size={18} fill='#fff' />}
								classNames={{ clearButton: 'translate-y-[-9px]' }}
							/>
						</ModalHeader>
						<ModalBody>
							<div className='grid grid-cols-5 gap-3'>
								{!query.isLoading &&
									!query.data?.pagination.total_items &&
									(filter ? <p>Ничего не найдно</p> : <p>Введите в поиск</p>)}
								{!!countFetching
									? [1, 2, 3, 4, 5].map(e => <PostCardLoading key={e} />)
									: query.data?.list?.map(anime => (
											<PostCard {...anime} key={anime.id} />
									  ))}
							</div>
						</ModalBody>
						<ModalFooter>
							<Button color='danger' variant='light' onPress={onClose}>
								Закрыть
							</Button>
						</ModalFooter>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}
