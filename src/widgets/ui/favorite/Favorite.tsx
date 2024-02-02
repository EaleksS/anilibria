'use client'

import { PostCardVertical } from '@/entities/ui/post-card/PostCardVertical'
import { useFavoriteQuery } from '@/libs/hook/query/useFavoriteQuery'
import React from 'react'

interface FavoriteProps {
	session: string
}

export const Favorite: React.FC<FavoriteProps> = ({ session }) => {
	const query = useFavoriteQuery(session)

	return (
		<div className='grid grid-cols-2 gap-3 mt-3'>
			{query.data?.list?.map((e, i) => (
				<PostCardVertical {...e} key={e.id} index={i} />
			))}
		</div>
	)
}
