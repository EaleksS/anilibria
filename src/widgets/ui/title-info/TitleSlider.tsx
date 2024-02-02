'use client'

import { PostCard } from '@/entities/ui/post-card/PostCard'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useMangaQuery } from '@/libs/hook/query/useMangaQuery'
import 'swiper/css'
import 'swiper/css/pagination'

interface TitleSliderProps {
	genres?: string[]
	id?: number
}

export const TitleSlider: React.FC<TitleSliderProps> = ({ ...props }) => {
	const query = useMangaQuery(
		`?genres=${props.genres?.join(',')}&limit=21&items_per_page=21`,
		{ enabled: !!props.genres }
	)

	const data = query.data?.list?.filter(f => f.id !== props.id)

	if (!data?.length) return

	return (
		<div className='flex gap-2 my-3 flex-col'>
			<h3>Смотри лучшие аниме на Anilibria</h3>
			<Swiper slidesPerView='auto' spaceBetween={10}>
				{data?.map(anime => (
					<SwiperSlide key={anime.id}>
						<PostCard {...anime} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
