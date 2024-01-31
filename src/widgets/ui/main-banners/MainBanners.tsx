import { BannerCard } from '@/entities/ui/banner-card/BannerCard'
import React from 'react'
import { banner_data } from './data'

export const MainBanners: React.FC = ({ ...props }) => {
	return (
		<div className='grid gap-2 grid-cols-2 mt-6'>
			{banner_data.map(banner => (
				<BannerCard key={banner.title} {...banner} />
			))}
		</div>
	)
}
