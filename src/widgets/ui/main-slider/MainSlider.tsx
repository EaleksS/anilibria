'use client'

import { PostCard, PostCardLoading } from '@/entities/ui/post-card/PostCard'
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
				{query.isLoading
					? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(e => (
							<SwiperSlide key={e}>
								<PostCardLoading />
							</SwiperSlide>
					  ))
					: query.data?.list?.map(anime => (
							<SwiperSlide key={anime.id}>
								<PostCard {...anime} />
							</SwiperSlide>
					  ))}
			</Swiper>
		</div>
	)
}
