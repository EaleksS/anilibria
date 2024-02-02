'use client'

import { PostCardVertical } from '@/entities/ui/post-card/PostCardVertical'
import { useUpdatesTitleQuery } from '@/libs/hook/query/useUpdatesTitlleQuery'
import { Button } from '@nextui-org/react'
import { useIsFetching } from '@tanstack/react-query'
import React from 'react'

export const MainUpdate: React.FC = () => {
	const [limit, setLimit] = React.useState<number>(50)

	const countFetching = useIsFetching({
		queryKey: [`updates`],
	})

	const query = useUpdatesTitleQuery(`?limit=${limit}`)

	return (
		<div>
			<h3>Последние обновленные аниме</h3>
			<div className='grid grid-cols-2 gap-3 mt-3'>
				{query?.data?.list?.map((e, i) => (
					<PostCardVertical {...e} key={e.id} index={i} />
				))}
			</div>
			<div className='flex justify-center my-3'>
				<Button
					variant='flat'
					color='primary'
					size='sm'
					onPress={() => setLimit(prev => prev + 50)}
					isLoading={!!countFetching}
				>
					Больше
				</Button>
			</div>
		</div>
	)
}
