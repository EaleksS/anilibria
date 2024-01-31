'use client'

import { PostCard } from '@/entities/ui/post-card/PostCard'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useMangaQuery } from '@/libs/hook/query/useMangaQuery'
import 'swiper/css'
import 'swiper/css/pagination'

export const MainSlider: React.FC = ({ ...props }) => {
	const query = useMangaQuery('?year=2024&limit=20&items_per_page=20')

	return (
		<div className='flex gap-2 my-3'>
			<Swiper
				slidesPerView='auto'
				spaceBetween={10}
				className='bg-dark-primary'
			>
				{query.data?.list?.map(anime => (
					<SwiperSlide key={anime.id}>
						<PostCard {...anime} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
