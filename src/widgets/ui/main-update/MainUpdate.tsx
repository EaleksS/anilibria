'use client'

import { PostCardVertical } from '@/entities/ui/post-card/PostCardVertical'
import { useUpdatesTitleQuery } from '@/libs/hook/query/useUpdatesTitlleQuery'
import React from 'react'

export const MainUpdate: React.FC = () => {
	const query = useUpdatesTitleQuery('?limit=100&items_per_page=100')

	return (
		<div>
			<h3>Последние обновленные аниме</h3>
			<div className='grid grid-cols-2 gap-3'>
				{query.data?.list.map(e => (
					<PostCardVertical {...e} key={e.id} />
				))}
			</div>
		</div>
	)
}
